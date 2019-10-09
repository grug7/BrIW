FROM python:latest

ADD requirements.txt /

RUN pip3 install -r /requirements.txt

EXPOSE 8080

ENTRYPOINT ["python3", "/app/app.py"] 
