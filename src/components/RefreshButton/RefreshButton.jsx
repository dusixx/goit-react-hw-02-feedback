import { BiRefresh } from 'react-icons/bi';
import { Button } from './RefreshButton.styled';

const RefreshButton = ({ onClick, size }) => (
  <Button title="Reset" onClick={onClick} size={size}>
    <BiRefresh size="100%" />
  </Button>
);

export default RefreshButton;
