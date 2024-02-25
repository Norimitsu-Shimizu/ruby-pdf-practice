FROM ruby:3.3.0-alpine3.19

WORKDIR /usr/src/app

RUN apk update && \
    apk upgrade && \
    apk add --no-cache linux-headers libxml2-dev make gcc libc-dev nodejs yarn tzdata bash mysql-dev git && \
    apk add --no-cache -t .build-packages --no-cache build-base curl-dev mysql-client && \
    apk add --no-cache imagemagick

COPY Gemfile /usr/src/app/Gemfile
COPY Gemfile.lock /usr/src/app/Gemfile.lock

RUN bundle config set force_ruby_platform true && \
    bundle install && \
    apk del --purge .build-packages && \
    apk add --no-cache gcompat

COPY . /usr/src/app/

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000

CMD ["rails", "server", "-b", "0.0.0.0"]