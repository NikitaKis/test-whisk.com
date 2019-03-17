# Тестовое приложение для whisk.com

## Задание
> Суть задачи: нужно сделать сайт, содержащий две страницы:
> - Главная, на которой будет постраничная выдача списка рецептов (пример того, как может выглядеть страница: https://recipes.whisk.com/>feed). Выведи изображение и имя рецепта. API который потребуется: http://developers.whisk.com/docs/recipes/search.
>- Страница рецепта, на которую можно перейти с главной страницы (пример того, как может выглядеть страница: https://recipes.whisk.com/>recipes/from-partners?recommendation=trending&>url=http%3A%2F%2Fwww.deliciousmagazine.co.uk%2Frecipes%2Fclassic-ragu-and-mozzarella-pasta-bake%2F&viewSource=Recipe+feed). Выведи >изображение, имя рецепта, ингредиенты и инструкции по приготовлению. API который потребуется: http://developers.whisk.com/docs/recipes/get.

> На что уделить внимание:
> - В проекте должны быть использованы React, Redux, TypeScript. Все остальное опционально.
> - На архитектуру приложения. Сейчас важно увидеть какой код ты пишешь и как ты его организовываешь.
> - Организация верстки и поддержка мобильных устройств.
> - Желательно не использовать различные boilerplate'ы.

Что не так важно:
- Система сборки.
- CSS-процессор.
- Внешний вид сайта (цвета, границы и прочее).

## Решение

### Server 
Folder server. Proxy server for whisk api. Build on [serverless](https://serverless.com/) framework with Amazon AWS services.
You need to define 'profiles' in serverless.yml and to make var.yml with dev: TOKEN: '...whisk token'
deploy: serverless deploy -v