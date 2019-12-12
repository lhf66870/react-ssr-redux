const Koa = require("koa");
const Router = require("koa-router");
const router = new Router();

const app = new Koa();
const port = process.env.PORT || 9090;

app.use((ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
  next();
});

router.get("/course/list", (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin", "*");
  ctx.set("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE");
  ctx.set("Content-Type", "application/json;charset=utf-8");
  ctx.body = {
    code: 0,
    list: [
      {
        name: "网吧",
        id: 1
      },
      {
        name: "酒吧",
        id: 2
      }
    ]
  };
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
  console.log(`施主，莫急，${port}号技师为您服务！！！`);
});
