const http = require("http"); // http 모듈 사용
const port = 3030;
const server = http.createServer((req, res) => {
  res.setHeader("content-type", "text/plain; charset=utf-8");

  const jsonData = {
    swagger: "2.0",
    info: {
      version: "1",
      title: "부산광역시 연제구_미세먼지쉼터 현황",
      description: "",
    },
    host: "api.odcloud.kr",
    basePath: "/api",
    schemes: ["https", "http"],
    securityDefinitions: {
      ApiKeyAuth: {
        type: "apiKey",
        in: "header",
        name: "Authorization",
      },
      ApiKeyAuth2: {
        type: "apiKey",
        in: "query",
        name: "serviceKey",
      },
    },
    paths: {
      "/15088480/v1/uddi:3c36bc86-22a5-4a58-8d37-9bdec078389a": {
        get: {
          tags: ["API 목록"],
          summary: "부산광역시 연제구_미세먼지쉼터 현황_20230920",
          operationId: "getuddi:3c36bc86-22a5-4a58-8d37-9bdec078389a",
          description: "부산광역시 연제구_미세먼지쉼터 현황_20230920",
          consumes: ["application/json"],
          produces: ["application/json"],
          parameters: [
            {
              name: "page",
              in: "query",
              description: "page index",
              type: "integer",
              format: "int64",
              exclusiveMinimum: false,
              default: 1,
            },
            {
              name: "perPage",
              in: "query",
              description: "page size",
              type: "integer",
              format: "int64",
              exclusiveMinimum: false,
              default: 10,
            },
            {
              name: "returnType",
              in: "query",
              description:
                "응답의 데이터 타입을 선택할 수 있습니다. (기본값: JSON)\u003Cbr/\u003EXML형태의 응답결과를 얻기 위해서는 XML 값으로 설정",
              type: "string",
              exclusiveMinimum: false,
            },
          ],
          responses: {
            200: {
              description: "성공적으로 수행 됨",
              schema: {
                $ref: "#/definitions/uddi:3c36bc86-22a5-4a58-8d37-9bdec078389a_api",
              },
            },
            401: {
              description: "인증 정보가 정확 하지 않음",
            },
            500: {
              description: "API 서버에 문제가 발생하였음",
            },
          },
          security: [
            {
              ApiKeyAuth: [],
            },
            {
              ApiKeyAuth2: [],
            },
          ],
        },
      },
    },
    definitions: {
      "uddi:3c36bc86-22a5-4a58-8d37-9bdec078389a_model": {
        type: "object",
        properties: {
          번호: {
            type: "integer",
            description: "",
          },
          쉼터명칭: {
            type: "string",
            description: "",
          },
          쉼터구분: {
            type: "string",
            description: "",
          },
          시도: {
            type: "string",
            description: "",
          },
          도로명주소: {
            type: "string",
            description: "",
          },
          지번주소: {
            type: "string",
            description: "",
          },
          시설유형: {
            type: "string",
            description: "",
          },
          시설면적: {
            type: "string",
            description: "",
          },
          "이용가능인원(명)": {
            type: "integer",
            description: "",
          },
          운영시간: {
            type: "string",
            description: "",
          },
          "환기설비 유무": {
            type: "string",
            description: "",
          },
          휴일개방: {
            type: "string",
            description: "",
          },
          외부개방: {
            type: "string",
            description: "",
          },
          경도: {
            type: "string",
            description: "",
          },
          위도: {
            type: "string",
            description: "",
          },
        },
      },
      "uddi:3c36bc86-22a5-4a58-8d37-9bdec078389a_api": {
        type: "object",
        properties: {
          page: {
            type: "integer",
            format: "int64",
          },
          perPage: {
            type: "integer",
            format: "int64",
          },
          totalCount: {
            type: "integer",
            format: "int64",
          },
          currentCount: {
            type: "integer",
            format: "int64",
          },
          matchCount: {
            type: "integer",
            format: "int64",
          },
          data: {
            type: "array",
            items: {
              $ref: "#/definitions/uddi:3c36bc86-22a5-4a58-8d37-9bdec078389a_model",
            },
          },
        },
      },
    },
  };
  // console.log(1, JSON.stringify(jsonData));
  console.log(1, JSON.stringify(jsonData));
  res.end(JSON.stringify(jsonData, null, 2));
});

server.listen(port, () => {
  // server.listen(3000,function   (){
  console.log(`${port}포트에서 서버가 가동됨 ${port - 30}포트가 아님.`);
  // ES6 신 문법 백틱을 사용 : 탬플릿문자열, 탬플릿리터럴
});
