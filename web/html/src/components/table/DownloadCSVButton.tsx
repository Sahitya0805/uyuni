import { IconTag } from "components/icontag";

type Props = {
  url: string;
  search?: {
    field?: string;
    criteria?: string;
  };
};

/**
 * A reusable CSV download button that handles search parameters injected by the Table component.
 */
export const DownloadCSVButton = ({ url, search }: Props) => {
  let finalUrl = url;
  if (search?.field && search?.criteria) {
    const searchParams = new URLSearchParams({
      qc: search.field,
      q: search.criteria,
    });
    finalUrl += (url.indexOf("?") === -1 ? "?" : "&") + searchParams.toString();
  }
  return (
    <a
      role="button"
      title={t("Download CSV")}
      href={finalUrl}
      className="btn btn-default"
      data-senna-off="true"
    >
      <IconTag type="item-download-csv" />
      {t("Download CSV")}
    </a>
  );
};
