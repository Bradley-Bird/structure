import { RequestContext } from '../context/RequestContext';
import { fetchRequestById } from '../services/requests';

const useCopyEditHooks = () => {
  const { setCopyOrEdit, setCeForm } = useContext(RequestContext);

  const handleClick = async (e, id) => {
    setCopyOrEdit(e.target.value);
    const resp = await fetchRequestById(id);
    const { request } = resp.body;
    setCeForm(request);
  };

  return { handleClick };
};
export default useCopyEditHooks;
