import request from 'superagent';

const base_url = 'https://api.multiplicae.com/api/v1/trails';

async function retrieve_trail_content(trail_slug) {
  try {
    const res = await request.get(`${base_url}/${trail_slug}/`);
    return res.body;
  } catch (err) {
    console.log(err.message);
  }
}

export default retrieve_trail_content;
