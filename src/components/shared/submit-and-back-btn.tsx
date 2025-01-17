import Link from "next/link";
import { FC } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

type TSubmitAndBackBtnProps = {
  prevPage?: string;
};

export const SubmitAndBackBtn: FC<TSubmitAndBackBtnProps> = ({ prevPage }) => {
  const { pending } = useFormStatus();
  return (
    <div className="flex items-center justify-end gap-4">
      {prevPage ? (
        <Link href={prevPage}>
          <Button type="button" variant="outline">
            Back
          </Button>
        </Link>
      ) : null}
      <Button type="submit" disabled={pending}>
        {pending ? "Submitting..." : "Continue"}
      </Button>
    </div>
  );
};
