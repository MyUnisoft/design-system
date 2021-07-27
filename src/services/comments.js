import { windev } from '../helpers/api';

const postComment = (comment, idSociety) => windev
  .makeApiCall('comments', 'post', null, comment, { headers: { 'society-id': idSociety } })
  .then(({ data }) => data);

const putComment = (comment, id, idSociety) => windev
  .makeApiCall(`/comments/${id}`, 'put', null, comment, { headers: { 'society-id': idSociety } })
  .then(({ data }) => data);

const getCommentsApi = async (payload, idSociety) => {
  const { data } = await windev.makeApiCall('/comments', 'get', payload, {}, { headers: { 'society-id': idSociety } });
  return data;
};

const getDiligenceCommentsApi = async (diligence_id) => {
  const { data } = await windev.makeApiCall('/comments', 'get', {
    diligence_id
  });
  return data;
};

export {
  postComment,
  putComment,
  getCommentsApi,
  getDiligenceCommentsApi
};
