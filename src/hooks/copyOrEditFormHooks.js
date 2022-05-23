import { useState, useEffect, useContext } from 'react';
import toast from 'react-hot-toast';
import { RequestContext } from '../context/RequestContext';
import { useRequest } from '../hooks/requestsHooks';
import { fetchRequestById } from '../services/requests';
import useRequestsById from './requestsByIdHooks';

const useCopyEditHooks = () => {
  const { setCopyOrEdit, setCeForm } = useContext(RequestContext);

  const handleClick = async (e, id) => {
    console.log(e.target.value, id);
    setCopyOrEdit(e.target.value);
    const resp = await fetchRequestById(id);
    const { request } = resp.body;
    setCeForm(request);
  };

  const handleEditClick = async (e, id) => {};
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const resp = await fetchRequestById(id);
  //     setCeForm(resp);
  //   };
  //   fetchData;
  // }, [id]);

  const handleChange = (event) => {
    setCeForm(event.target.value);
  };
  return { handleChange, handleClick };
};
export default useCopyEditHooks;
