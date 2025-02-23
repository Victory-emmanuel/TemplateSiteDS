// custom-loader.js
import { pathToFileURL } from "url";

export function resolve(specifier, context, defaultResolve) {
  if (specifier.endsWith(".js")) {
    return defaultResolve(specifier, context);
  }
  return defaultResolve(`${specifier}.js`, context);
}
