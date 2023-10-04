'use client'

import Link from "next/link"

const PaginationItem = ({pageNum, sort}) => {
  return (
    <Link href={`/products?sort=${sort}&page=${pageNum}`} className="bg-secondary-color px-2 rounded">{pageNum}</Link>
  )
}

export default PaginationItem