import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./Pagination.module.css";

const Pagination = ({
  items,
  pageSize,
  currentPage,
}: {
  items: number;
  pageSize: number;
  currentPage: number;
}) => {
  const pagesCount = Math.ceil(items / pageSize);

  if (pagesCount === 1) return null;

  const generatePageNumbers = () => {
    const pages = [];
    const totalPagesToShow = 4; // Adjust this to control how many pages to show before collapsing

    if (pagesCount <= totalPagesToShow + 4) {
      for (let i = 1; i <= pagesCount; i++) pages.push(i);
    } else {
      if (currentPage <= totalPagesToShow) {
        for (let i = 1; i <= totalPagesToShow; i++) pages.push(i);
        pages.push("...");
        pages.push(pagesCount - 1, pagesCount);
      } else if (currentPage > pagesCount - totalPagesToShow) {
        pages.push(1, 2, "...");
        for (let i = pagesCount - totalPagesToShow + 1; i <= pagesCount; i++)
          pages.push(i);
      } else {
        pages.push(1, 2, "...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push("...");
        pages.push(pagesCount - 1, pagesCount);
      }
    }
    return pages;
  };

  const pages = generatePageNumbers();

  return (
    <div>
      <ul className={styles.pagination}>
        {currentPage > 1 ? (
          <Link href={`/posts?page=${currentPage - 1}`}>
            <div className={styles.nextprev}>
              <ChevronLeft
                style={{ height: "20px", width: "20px", strokeWidth: "3" }}
              />
            </div>
          </Link>
        ) : (
          <div className={styles.nextprevmax}>
            <ChevronLeft
              style={{ height: "20px", width: "20px", strokeWidth: "3" }}
            />
          </div>
        )}

        {pages.map((page, index) => (
          <li
            key={index}
            className={
              page === currentPage
                ? styles.pageItemActive
                : page === "..."
                ? styles.pageEllipsis
                : styles.pageItem
            }
          >
            {page === "..." ? (
              <span>{page}</span>
            ) : (
              <Link href={`/posts?page=${page}`} className={styles.pageLink}>
                {page}
              </Link>
            )}
          </li>
        ))}

        {currentPage < pagesCount ? (
          <Link href={`/posts?page=${currentPage + 1}`}>
            <div className={styles.nextprev}>
              <ChevronRight
                style={{ height: "20px", width: "20px", strokeWidth: "3" }}
              />
            </div>
          </Link>
        ) : (
          <div className={styles.nextprevmax}>
            <ChevronRight
              style={{ height: "20px", width: "20px", strokeWidth: "3" }}
            />
          </div>
        )}
      </ul>
    </div>
  );
};

export default Pagination;
