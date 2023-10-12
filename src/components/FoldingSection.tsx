import { ChevronUp } from "lucide-react";
import { ReactNode, useState } from "react";

type FoldingSectionProps = {
  children: ReactNode;
  heading?: ReactNode;
  foldedByDefault?: boolean;
};

export default function FoldingSection({
  children,
  heading,
  foldedByDefault = false,
}: FoldingSectionProps) {
  const [folded, setFolded] = useState<boolean>(foldedByDefault);

  return (
    <section className={`folding-section ${folded ? "folded" : ""}`}>
      <button onClick={() => setFolded(!folded)} className="folding-header">
        {heading}
        <hr />
        <ChevronUp />
      </button>
      <div className="folding-outer">
        <div className="folding-inner">{children}</div>
      </div>
    </section>
  );
}
