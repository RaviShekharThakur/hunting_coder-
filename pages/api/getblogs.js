// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// http://localhost:3000/api/getblogs?slug=dummyfile
import * as fs from 'fs';

export default function handler(req, res) {
  fs.readFile(`blogdata/${req.query.slug}.json`, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('No blogs present under this slug');
    }

    res.status(200).json(JSON.parse(data));
  });
}