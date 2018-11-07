FROM python:3
ENV PYTHONUNBUFFERED 1

RUN mkdir /opt/gwapit
ENV PYTHONPATH /opt/gwapit:$PYTHONPATH
WORKDIR /opt/gwapit

ADD requirements.txt /opt/gwapit/
RUN pip install -r requirements.txt

ADD . /opt/gwapit
RUN python manage.py migrate

#ENTRYPOINT ["python","manage.py"]
CMD ["python","manage.py","migrate"]
