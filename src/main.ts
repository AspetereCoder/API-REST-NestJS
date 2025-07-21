import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // swagger config
  const config = new DocumentBuilder()
    .setTitle("Taskger API")
    .setDescription("Uma API para o gerenciamentode de tarefas pessoais")
    .setVersion("0.1")
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api/docs", app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
