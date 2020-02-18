import request from 'superagent';

const base_url = 'https://api.multiplicae.com/api/v1/trails/default'

async function retrieve_node_content(node_id) {
  try {
    const res = await request.get(`${base_url}/${node_id}`);
    return res.body;
  } catch (err) {
    console.log(err.message);
  }
}

export default retrieve_node_content
