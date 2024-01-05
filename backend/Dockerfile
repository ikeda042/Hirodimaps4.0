FROM python:3.11-slim

WORKDIR /usr/src/app

COPY backend/requirements.txt ./
RUN pip install --disable-pip-version-check --no-cache-dir -r requirements.txt

COPY backend/ ./

EXPOSE 8000

CMD ["python","main.py"]
