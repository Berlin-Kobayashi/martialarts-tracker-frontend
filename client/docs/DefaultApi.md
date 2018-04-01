# MartialartsTracker.DefaultApi

All URIs are relative to *https://martialartstracker_api_1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**exerciseExerciseIdDelete**](DefaultApi.md#exerciseExerciseIdDelete) | **DELETE** /exercise/{exerciseId} | 
[**exerciseExerciseIdGet**](DefaultApi.md#exerciseExerciseIdGet) | **GET** /exercise/{exerciseId} | 
[**exerciseExerciseIdPut**](DefaultApi.md#exerciseExerciseIdPut) | **PUT** /exercise/{exerciseId} | 
[**exerciseExpandExerciseIdGet**](DefaultApi.md#exerciseExpandExerciseIdGet) | **GET** /exercise/expand/{exerciseId} | 
[**exerciseGet**](DefaultApi.md#exerciseGet) | **GET** /exercise | 
[**exercisePost**](DefaultApi.md#exercisePost) | **POST** /exercise | 
[**exerciseReferencedByExerciseIdGet**](DefaultApi.md#exerciseReferencedByExerciseIdGet) | **GET** /exercise/referenced-by/{exerciseId} | 
[**metaSwaggerGet**](DefaultApi.md#metaSwaggerGet) | **GET** /meta/swagger | 
[**methodExpandMethodIdGet**](DefaultApi.md#methodExpandMethodIdGet) | **GET** /method/expand/{methodId} | 
[**methodGet**](DefaultApi.md#methodGet) | **GET** /method | 
[**methodMethodIdDelete**](DefaultApi.md#methodMethodIdDelete) | **DELETE** /method/{methodId} | 
[**methodMethodIdGet**](DefaultApi.md#methodMethodIdGet) | **GET** /method/{methodId} | 
[**methodMethodIdPut**](DefaultApi.md#methodMethodIdPut) | **PUT** /method/{methodId} | 
[**methodPost**](DefaultApi.md#methodPost) | **POST** /method | 
[**methodReferencedByMethodIdGet**](DefaultApi.md#methodReferencedByMethodIdGet) | **GET** /method/referenced-by/{methodId} | 
[**techniqueExpandTechniqueIdGet**](DefaultApi.md#techniqueExpandTechniqueIdGet) | **GET** /technique/expand/{techniqueId} | 
[**techniqueGet**](DefaultApi.md#techniqueGet) | **GET** /technique | 
[**techniquePost**](DefaultApi.md#techniquePost) | **POST** /technique | 
[**techniqueReferencedByTechniqueIdGet**](DefaultApi.md#techniqueReferencedByTechniqueIdGet) | **GET** /technique/referenced-by/{techniqueId} | 
[**techniqueTechniqueIdDelete**](DefaultApi.md#techniqueTechniqueIdDelete) | **DELETE** /technique/{techniqueId} | 
[**techniqueTechniqueIdGet**](DefaultApi.md#techniqueTechniqueIdGet) | **GET** /technique/{techniqueId} | 
[**techniqueTechniqueIdPut**](DefaultApi.md#techniqueTechniqueIdPut) | **PUT** /technique/{techniqueId} | 
[**trainingunitExpandTrainingunitIdGet**](DefaultApi.md#trainingunitExpandTrainingunitIdGet) | **GET** /trainingunit/expand/{trainingunitId} | 
[**trainingunitGet**](DefaultApi.md#trainingunitGet) | **GET** /trainingunit | 
[**trainingunitPost**](DefaultApi.md#trainingunitPost) | **POST** /trainingunit | 
[**trainingunitReferencedByTrainingunitIdGet**](DefaultApi.md#trainingunitReferencedByTrainingunitIdGet) | **GET** /trainingunit/referenced-by/{trainingunitId} | 
[**trainingunitTrainingunitIdDelete**](DefaultApi.md#trainingunitTrainingunitIdDelete) | **DELETE** /trainingunit/{trainingunitId} | 
[**trainingunitTrainingunitIdGet**](DefaultApi.md#trainingunitTrainingunitIdGet) | **GET** /trainingunit/{trainingunitId} | 
[**trainingunitTrainingunitIdPut**](DefaultApi.md#trainingunitTrainingunitIdPut) | **PUT** /trainingunit/{trainingunitId} | 


<a name="exerciseExerciseIdDelete"></a>
# **exerciseExerciseIdDelete**
> exerciseExerciseIdDelete(exerciseId)



### Example
```javascript
import MartialartsTracker from 'martialarts_tracker';

let apiInstance = new MartialartsTracker.DefaultApi();

let exerciseId = "exerciseId_example"; // String | ID of the exercise


apiInstance.exerciseExerciseIdDelete(exerciseId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exerciseId** | **String**| ID of the exercise | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="exerciseExerciseIdGet"></a>
# **exerciseExerciseIdGet**
> Exercise exerciseExerciseIdGet(exerciseId)



### Example
```javascript
import MartialartsTracker from 'martialarts_tracker';

let apiInstance = new MartialartsTracker.DefaultApi();

let exerciseId = "exerciseId_example"; // String | ID of the exercise


apiInstance.exerciseExerciseIdGet(exerciseId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exerciseId** | **String**| ID of the exercise | 

### Return type

[**Exercise**](Exercise.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="exerciseExerciseIdPut"></a>
# **exerciseExerciseIdPut**
> Exercise exerciseExerciseIdPut(exerciseIdbody)



### Example
```javascript
import MartialartsTracker from 'martialarts_tracker';

let apiInstance = new MartialartsTracker.DefaultApi();

let exerciseId = "exerciseId_example"; // String | ID of the exercise

let body = new MartialartsTracker.Exercise(); // Exercise | ID of the exercise


apiInstance.exerciseExerciseIdPut(exerciseIdbody, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exerciseId** | **String**| ID of the exercise | 
 **body** | [**Exercise**](Exercise.md)| ID of the exercise | 

### Return type

[**Exercise**](Exercise.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="exerciseExpandExerciseIdGet"></a>
# **exerciseExpandExerciseIdGet**
> ExerciseExpanded exerciseExpandExerciseIdGet(exerciseId)



### Example
```javascript
import MartialartsTracker from 'martialarts_tracker';

let apiInstance = new MartialartsTracker.DefaultApi();

let exerciseId = "exerciseId_example"; // String | ID of the exercise


apiInstance.exerciseExpandExerciseIdGet(exerciseId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exerciseId** | **String**| ID of the exercise | 

### Return type

[**ExerciseExpanded**](ExerciseExpanded.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="exerciseGet"></a>
# **exerciseGet**
> [Exercise] exerciseGet()



### Example
```javascript
import MartialartsTracker from 'martialarts_tracker';

let apiInstance = new MartialartsTracker.DefaultApi();

apiInstance.exerciseGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Exercise]**](Exercise.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="exercisePost"></a>
# **exercisePost**
> Exercise exercisePost(body)



### Example
```javascript
import MartialartsTracker from 'martialarts_tracker';

let apiInstance = new MartialartsTracker.DefaultApi();

let body = new MartialartsTracker.Exercise(); // Exercise | ID of the exercise


apiInstance.exercisePost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Exercise**](Exercise.md)| ID of the exercise | 

### Return type

[**Exercise**](Exercise.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="exerciseReferencedByExerciseIdGet"></a>
# **exerciseReferencedByExerciseIdGet**
> ExerciseReferencedBy exerciseReferencedByExerciseIdGet(exerciseId)



### Example
```javascript
import MartialartsTracker from 'martialarts_tracker';

let apiInstance = new MartialartsTracker.DefaultApi();

let exerciseId = "exerciseId_example"; // String | ID of the exercise


apiInstance.exerciseReferencedByExerciseIdGet(exerciseId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exerciseId** | **String**| ID of the exercise | 

### Return type

[**ExerciseReferencedBy**](ExerciseReferencedBy.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="metaSwaggerGet"></a>
# **metaSwaggerGet**
> metaSwaggerGet()



### Example
```javascript
import MartialartsTracker from 'martialarts_tracker';

let apiInstance = new MartialartsTracker.DefaultApi();

apiInstance.metaSwaggerGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="methodExpandMethodIdGet"></a>
# **methodExpandMethodIdGet**
> MethodExpanded methodExpandMethodIdGet(methodId)



### Example
```javascript
import MartialartsTracker from 'martialarts_tracker';

let apiInstance = new MartialartsTracker.DefaultApi();

let methodId = "methodId_example"; // String | ID of the method


apiInstance.methodExpandMethodIdGet(methodId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **methodId** | **String**| ID of the method | 

### Return type

[**MethodExpanded**](MethodExpanded.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="methodGet"></a>
# **methodGet**
> [Method] methodGet()



### Example
```javascript
import MartialartsTracker from 'martialarts_tracker';

let apiInstance = new MartialartsTracker.DefaultApi();

apiInstance.methodGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Method]**](Method.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="methodMethodIdDelete"></a>
# **methodMethodIdDelete**
> methodMethodIdDelete(methodId)



### Example
```javascript
import MartialartsTracker from 'martialarts_tracker';

let apiInstance = new MartialartsTracker.DefaultApi();

let methodId = "methodId_example"; // String | ID of the method


apiInstance.methodMethodIdDelete(methodId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **methodId** | **String**| ID of the method | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="methodMethodIdGet"></a>
# **methodMethodIdGet**
> Method methodMethodIdGet(methodId)



### Example
```javascript
import MartialartsTracker from 'martialarts_tracker';

let apiInstance = new MartialartsTracker.DefaultApi();

let methodId = "methodId_example"; // String | ID of the method


apiInstance.methodMethodIdGet(methodId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **methodId** | **String**| ID of the method | 

### Return type

[**Method**](Method.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="methodMethodIdPut"></a>
# **methodMethodIdPut**
> Method methodMethodIdPut(methodIdbody)



### Example
```javascript
import MartialartsTracker from 'martialarts_tracker';

let apiInstance = new MartialartsTracker.DefaultApi();

let methodId = "methodId_example"; // String | ID of the method

let body = new MartialartsTracker.Method(); // Method | ID of the method


apiInstance.methodMethodIdPut(methodIdbody, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **methodId** | **String**| ID of the method | 
 **body** | [**Method**](Method.md)| ID of the method | 

### Return type

[**Method**](Method.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="methodPost"></a>
# **methodPost**
> Method methodPost(body)



### Example
```javascript
import MartialartsTracker from 'martialarts_tracker';

let apiInstance = new MartialartsTracker.DefaultApi();

let body = new MartialartsTracker.Method(); // Method | ID of the method


apiInstance.methodPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Method**](Method.md)| ID of the method | 

### Return type

[**Method**](Method.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="methodReferencedByMethodIdGet"></a>
# **methodReferencedByMethodIdGet**
> MethodReferencedBy methodReferencedByMethodIdGet(methodId)



### Example
```javascript
import MartialartsTracker from 'martialarts_tracker';

let apiInstance = new MartialartsTracker.DefaultApi();

let methodId = "methodId_example"; // String | ID of the method


apiInstance.methodReferencedByMethodIdGet(methodId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **methodId** | **String**| ID of the method | 

### Return type

[**MethodReferencedBy**](MethodReferencedBy.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="techniqueExpandTechniqueIdGet"></a>
# **techniqueExpandTechniqueIdGet**
> TechniqueExpanded techniqueExpandTechniqueIdGet(techniqueId)



### Example
```javascript
import MartialartsTracker from 'martialarts_tracker';

let apiInstance = new MartialartsTracker.DefaultApi();

let techniqueId = "techniqueId_example"; // String | ID of the technique


apiInstance.techniqueExpandTechniqueIdGet(techniqueId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **techniqueId** | **String**| ID of the technique | 

### Return type

[**TechniqueExpanded**](TechniqueExpanded.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="techniqueGet"></a>
# **techniqueGet**
> [Technique] techniqueGet()



### Example
```javascript
import MartialartsTracker from 'martialarts_tracker';

let apiInstance = new MartialartsTracker.DefaultApi();

apiInstance.techniqueGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Technique]**](Technique.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="techniquePost"></a>
# **techniquePost**
> Technique techniquePost(body)



### Example
```javascript
import MartialartsTracker from 'martialarts_tracker';

let apiInstance = new MartialartsTracker.DefaultApi();

let body = new MartialartsTracker.Technique(); // Technique | ID of the technique


apiInstance.techniquePost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Technique**](Technique.md)| ID of the technique | 

### Return type

[**Technique**](Technique.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="techniqueReferencedByTechniqueIdGet"></a>
# **techniqueReferencedByTechniqueIdGet**
> TechniqueReferencedBy techniqueReferencedByTechniqueIdGet(techniqueId)



### Example
```javascript
import MartialartsTracker from 'martialarts_tracker';

let apiInstance = new MartialartsTracker.DefaultApi();

let techniqueId = "techniqueId_example"; // String | ID of the technique


apiInstance.techniqueReferencedByTechniqueIdGet(techniqueId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **techniqueId** | **String**| ID of the technique | 

### Return type

[**TechniqueReferencedBy**](TechniqueReferencedBy.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="techniqueTechniqueIdDelete"></a>
# **techniqueTechniqueIdDelete**
> techniqueTechniqueIdDelete(techniqueId)



### Example
```javascript
import MartialartsTracker from 'martialarts_tracker';

let apiInstance = new MartialartsTracker.DefaultApi();

let techniqueId = "techniqueId_example"; // String | ID of the technique


apiInstance.techniqueTechniqueIdDelete(techniqueId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **techniqueId** | **String**| ID of the technique | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="techniqueTechniqueIdGet"></a>
# **techniqueTechniqueIdGet**
> Technique techniqueTechniqueIdGet(techniqueId)



### Example
```javascript
import MartialartsTracker from 'martialarts_tracker';

let apiInstance = new MartialartsTracker.DefaultApi();

let techniqueId = "techniqueId_example"; // String | ID of the technique


apiInstance.techniqueTechniqueIdGet(techniqueId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **techniqueId** | **String**| ID of the technique | 

### Return type

[**Technique**](Technique.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="techniqueTechniqueIdPut"></a>
# **techniqueTechniqueIdPut**
> Technique techniqueTechniqueIdPut(techniqueIdbody)



### Example
```javascript
import MartialartsTracker from 'martialarts_tracker';

let apiInstance = new MartialartsTracker.DefaultApi();

let techniqueId = "techniqueId_example"; // String | ID of the technique

let body = new MartialartsTracker.Technique(); // Technique | ID of the technique


apiInstance.techniqueTechniqueIdPut(techniqueIdbody, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **techniqueId** | **String**| ID of the technique | 
 **body** | [**Technique**](Technique.md)| ID of the technique | 

### Return type

[**Technique**](Technique.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="trainingunitExpandTrainingunitIdGet"></a>
# **trainingunitExpandTrainingunitIdGet**
> TrainingunitExpanded trainingunitExpandTrainingunitIdGet(trainingunitId)



### Example
```javascript
import MartialartsTracker from 'martialarts_tracker';

let apiInstance = new MartialartsTracker.DefaultApi();

let trainingunitId = "trainingunitId_example"; // String | ID of the trainingunit


apiInstance.trainingunitExpandTrainingunitIdGet(trainingunitId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trainingunitId** | **String**| ID of the trainingunit | 

### Return type

[**TrainingunitExpanded**](TrainingunitExpanded.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="trainingunitGet"></a>
# **trainingunitGet**
> [Trainingunit] trainingunitGet()



### Example
```javascript
import MartialartsTracker from 'martialarts_tracker';

let apiInstance = new MartialartsTracker.DefaultApi();

apiInstance.trainingunitGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Trainingunit]**](Trainingunit.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="trainingunitPost"></a>
# **trainingunitPost**
> Trainingunit trainingunitPost(body)



### Example
```javascript
import MartialartsTracker from 'martialarts_tracker';

let apiInstance = new MartialartsTracker.DefaultApi();

let body = new MartialartsTracker.Trainingunit(); // Trainingunit | ID of the trainingunit


apiInstance.trainingunitPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Trainingunit**](Trainingunit.md)| ID of the trainingunit | 

### Return type

[**Trainingunit**](Trainingunit.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="trainingunitReferencedByTrainingunitIdGet"></a>
# **trainingunitReferencedByTrainingunitIdGet**
> TrainingunitReferencedBy trainingunitReferencedByTrainingunitIdGet(trainingunitId)



### Example
```javascript
import MartialartsTracker from 'martialarts_tracker';

let apiInstance = new MartialartsTracker.DefaultApi();

let trainingunitId = "trainingunitId_example"; // String | ID of the trainingunit


apiInstance.trainingunitReferencedByTrainingunitIdGet(trainingunitId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trainingunitId** | **String**| ID of the trainingunit | 

### Return type

[**TrainingunitReferencedBy**](TrainingunitReferencedBy.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="trainingunitTrainingunitIdDelete"></a>
# **trainingunitTrainingunitIdDelete**
> trainingunitTrainingunitIdDelete(trainingunitId)



### Example
```javascript
import MartialartsTracker from 'martialarts_tracker';

let apiInstance = new MartialartsTracker.DefaultApi();

let trainingunitId = "trainingunitId_example"; // String | ID of the trainingunit


apiInstance.trainingunitTrainingunitIdDelete(trainingunitId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trainingunitId** | **String**| ID of the trainingunit | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="trainingunitTrainingunitIdGet"></a>
# **trainingunitTrainingunitIdGet**
> Trainingunit trainingunitTrainingunitIdGet(trainingunitId)



### Example
```javascript
import MartialartsTracker from 'martialarts_tracker';

let apiInstance = new MartialartsTracker.DefaultApi();

let trainingunitId = "trainingunitId_example"; // String | ID of the trainingunit


apiInstance.trainingunitTrainingunitIdGet(trainingunitId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trainingunitId** | **String**| ID of the trainingunit | 

### Return type

[**Trainingunit**](Trainingunit.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="trainingunitTrainingunitIdPut"></a>
# **trainingunitTrainingunitIdPut**
> Trainingunit trainingunitTrainingunitIdPut(trainingunitIdbody)



### Example
```javascript
import MartialartsTracker from 'martialarts_tracker';

let apiInstance = new MartialartsTracker.DefaultApi();

let trainingunitId = "trainingunitId_example"; // String | ID of the trainingunit

let body = new MartialartsTracker.Trainingunit(); // Trainingunit | ID of the trainingunit


apiInstance.trainingunitTrainingunitIdPut(trainingunitIdbody, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trainingunitId** | **String**| ID of the trainingunit | 
 **body** | [**Trainingunit**](Trainingunit.md)| ID of the trainingunit | 

### Return type

[**Trainingunit**](Trainingunit.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

