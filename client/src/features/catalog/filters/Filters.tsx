import { Box, Button, Paper } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../app/store/store';
import { resetParams, setBrands, setOrderBy, setTypes } from '../catalogSlice';
import RadioButtonGroup from '../../../app/shared/components/RadioButtonGroup';
import Search from './components/Search';
import CheckboxButtons from './components/CheckboxButtons';

type Props = {
  filtersData: {
    brands: string[];
    types: string[];
  };
};

const sortOptions = [
  {
    value: 'name',
    label: 'Alphabetical',
  },
  {
    value: 'priceDesc',
    label: 'Price: High to low',
  },
  {
    value: 'price',
    label: 'Price: Low to high',
  },
];

const Filters = ({filtersData}: Props) => {
  const { orderBy, types, brands } = useAppSelector((state) => state.catalog);
  const dispatch = useAppDispatch();

  const dispatchAndRelocateWindow = (action) => {
    dispatch(action);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <Paper>
        <Search />
      </Paper>
      <Paper sx={{ p: 3 }}>
        <RadioButtonGroup
          selectedValue={orderBy}
          options={sortOptions}
          onChange={(e) =>
            dispatchAndRelocateWindow(setOrderBy(e.target.value))
          }
        />
      </Paper>
      <Paper sx={{ p: 3 }}>
        <CheckboxButtons
          checked={brands}
          items={filtersData.brands}
          onChange={(items: string[]) =>
            dispatchAndRelocateWindow(setBrands(items))
          }
        />
      </Paper>
      <Paper sx={{ p: 3 }}>
        <CheckboxButtons
          checked={types}
          items={filtersData.types}
          onChange={(items: string[]) =>
            dispatchAndRelocateWindow(setTypes(items))
          }
        />
      </Paper>
      <Button
        color="primary"
        variant="contained"
        sx={{ textTransform: 'capitalize' }}
        onClick={() => dispatchAndRelocateWindow(resetParams())}
      >
        Reset filters
      </Button>
    </Box>
  );
};

export default Filters;
