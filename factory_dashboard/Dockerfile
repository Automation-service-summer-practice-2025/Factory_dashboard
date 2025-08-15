FROM node:alpine

WORKDIR /factory_dashboard/src/app

COPY . /factory_dashboard/src/app/

RUN npm install -g @angular/cli
RUN npm install

CMD [ "ng", "serve", "--host", "0.0.0.0" ]
