FROM openjdk:19
LABEL authors="sanskar sontakke"
ARG jar_file=target/*.jar

COPY ${jar_file} serviceregistry.jar

ENTRYPOINT ["java", "-jar", "/serviceregistry.jar"]

EXPOSE 7070
