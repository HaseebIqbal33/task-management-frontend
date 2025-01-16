export function calculateTotalPages(
  totalElements: number,
  pageSize: number
): number {
  return Math.ceil(totalElements / pageSize);
}
