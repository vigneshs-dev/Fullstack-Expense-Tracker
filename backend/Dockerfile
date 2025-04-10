# FROM eclipse-temurin:21-jdk-alpine

# # Install Maven
# RUN apk add --no-cache maven

# WORKDIR /app

# # Copy pom.xml first for better layer caching
# COPY pom.xml .

# # Download dependencies
# RUN mvn dependency:go-offline -B

# # Copy source code
# COPY src ./src

# # Package the application
# RUN mvn package -DskipTests

# EXPOSE 8080

# # Run the JAR file (adjust the path if needed)
# CMD ["java", "-jar", "target/*.jar"]





FROM openjdk:22-jdk-slim
EXPOSE 8080
ADD target/expenseTracker-0.0.1-SNAPSHOT.jar expenseTracker-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","/expenseTracker-0.0.1-SNAPSHOT.jar"]