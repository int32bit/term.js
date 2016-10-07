FROM python:2
RUN mkdir /termjs
Add . /termjs
WORKDIR /termjs
EXPOSE 8000
CMD ["python", "-m", "SimpleHTTPServer"]
