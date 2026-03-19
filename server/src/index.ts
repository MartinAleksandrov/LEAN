// starts the server (chooses port, calls listen)
import app from "../src/app"

require('dotenv').config({ path: '.env.development' });

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

