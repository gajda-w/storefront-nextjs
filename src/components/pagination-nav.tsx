import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type PaginationNavProps = {
  pageNumber: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
};

export const PaginationNav = ({
  pageNumber,
  hasNextPage = true,
  hasPreviousPage = true,
}: PaginationNavProps) => {
  return (
    <Pagination>
      <PaginationContent>
        {hasPreviousPage && (
          <PaginationItem>
            <PaginationPrevious href={(pageNumber - 1).toString()} />
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationLink href="1">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        {hasNextPage && (
          <PaginationItem>
            <PaginationNext href={(Number(pageNumber) + 1).toString()} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

PaginationNav.displayName = "PaginationNav";
