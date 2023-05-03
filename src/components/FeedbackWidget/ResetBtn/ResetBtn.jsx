import { BiRefresh } from 'react-icons/bi';
import { Button } from './ResetBtn.styled';

const ResetBtn = ({ onClick, size }) => (
  <Button title="reset" onClick={onClick} size={size}>
    <BiRefresh size="100%" />
  </Button>
);

export default ResetBtn;
