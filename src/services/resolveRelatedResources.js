import {isPrimitive, isValidHttpUrl} from "../utils/validate.js";
import {assocPath, filter, identity, map, memoizeWith, pipe, reduce} from "ramda";
import axios from "axios";

const getResource = memoizeWith(identity, async (url) => (await axios.get(url)).data)

const getPathValuePairs = (obj, prevPath = []) =>
  Object.entries(obj)
    .flatMap(([key, value]) => {
      const path = Array.isArray(obj) ? Number(key) : key
      return isPrimitive(value)
        ? [[[...prevPath, path], value]]
        : getPathValuePairs(value, [...prevPath, path]);
    })

getPathValuePairs([1, 2, 3])/*?*/

export const resolveRelatedResources = async (resourse) => {
  const data = pipe(
    getPathValuePairs,
    filter(([_, value]) => isValidHttpUrl(value)), // get only pairs where value is url
    filter(([path]) => !path.includes("url")), // filter out "url" key (it is self reference)
    map(async ([path, value]) => [path, await getResource(value)])
  )(resourse)


  return reduce((result, [path, value]) => assocPath(path, value, result), resourse, await Promise.all(data))

}



