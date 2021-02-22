import { parseStr } from "@x-drive/utils";

export default function () {
    const search = window.location.search;
    return search
        ? parseStr(
            search.replace("?", "")
        )
        : {};
}