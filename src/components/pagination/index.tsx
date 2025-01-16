import { calculateTotalPages } from '@/helpers';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Pagination as MuiPagination,
  Select,
  SelectChangeEvent,
} from '@mui/material';

const PAGE_SIZES = [5, 10, 15, 20, 25, 30];

interface Props {
  total: number;
  pageSize: number;
  currentPage: number;
  onPageSizeChange: (pageSize: number) => void;
  onPageNumberChange: (pageNumber: number) => void;
}

function Pagination({
  total,
  onPageNumberChange,
  onPageSizeChange,
  pageSize,
  currentPage,
}: Props) {
  const handleChange = (event: SelectChangeEvent) => {
    onPageSizeChange(+event.target.value);
    onPageNumberChange(1);
  };
  return (
    <Box display={'flex'} alignItems={'center'} mt={2}>
      <Box flex={1}>
        <MuiPagination
          count={calculateTotalPages(total, pageSize)}
          defaultPage={currentPage}
          onChange={(_, page) => {
            onPageNumberChange(page);
          }}
        />
      </Box>

      <FormControl>
        <InputLabel id='demo-simple-select-label'>Page Size</InputLabel>
        <Select
          sx={{ width: '100px' }}
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={`${pageSize}`}
          label='Page Size'
          onChange={handleChange}
        >
          {PAGE_SIZES.map((pageSize) => (
            <MenuItem key={pageSize} value={pageSize}>
              {pageSize}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default Pagination;
