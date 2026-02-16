import yaml from "js-yaml";
import siteRaw from "../../content/site.yml?raw";

function parse(raw) {
  try {
    return yaml.load(raw) ?? {};
  } catch (e) {
    console.error("CMS YAML parse error:", e);
    return {};
  }
}

export const cms = { site: parse(siteRaw) };
