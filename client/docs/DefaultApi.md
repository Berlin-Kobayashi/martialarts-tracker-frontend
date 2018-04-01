# MartialartsTracker.DefaultApi

All URIs are relative to *https://martialartstracker_api_1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**exerciseExerciseIdDelete**](DefaultApi.md#exerciseExerciseIdDelete) | **DELETE** /exercise/{exerciseId} | 
[**exerciseExerciseIdGet**](DefaultApi.md#exerciseExerciseIdGet) | **GET** /exercise/{exerciseId} | 
[**exerciseExerciseIdPost**](DefaultApi.md#exerciseExerciseIdPost) | **POST** /exercise/{exerciseId} | 
[**exerciseExerciseIdPut**](DefaultApi.md#exerciseExerciseIdPut) | **PUT** /exercise/{exerciseId} | 
[**exerciseExpandExerciseIdGet**](DefaultApi.md#exerciseExpandExerciseIdGet) | **GET** /exercise/expand/{exerciseId} | 
[**exerciseGet**](DefaultApi.md#exerciseGet) | **GET** /exercise | 
[**exerciseReferencedByExerciseIdGet**](DefaultApi.md#exerciseReferencedByExerciseIdGet) | **GET** /exercise/referenced-by/{exerciseId} | 
[**metaSwaggerGet**](DefaultApi.md#metaSwaggerGet) | **GET** /meta/swagger | 
[**methodExpandMethodIdGet**](DefaultApi.md#methodExpandMethodIdGet) | **GET** /method/expand/{methodId} | 
[**methodGet**](DefaultApi.md#methodGet) | **GET** /method | 
[**methodMethodIdDelete**](DefaultApi.md#methodMethodIdDelete) | **DELETE** /method/{methodId} | 
[**methodMethodIdGet**](DefaultApi.md#methodMethodIdGet) | **GET** /method/{methodId} | 
[**methodMethodIdPost**](DefaultApi.md#methodMethodIdPost) | **POST** /method/{methodId} | 
[**methodMethodIdPut**](DefaultApi.md#methodMethodIdPut) | **PUT** /method/{methodId} | 
[**methodReferencedByMethodIdGet**](DefaultApi.md#methodReferencedByMethodIdGet) | **GET** /method/referenced-by/{methodId} | 
[**techniqueExpandTechniqueIdGet**](DefaultApi.md#techniqueExpandTechniqueIdGet) | **GET** /technique/expand/{techniqueId} | 
[**techniqueGet**](DefaultApi.md#techniqueGet) | **GET** /technique | 
[**techniqueReferencedByTechniqueIdGet**](DefaultApi.md#techniqueReferencedByTechniqueIdGet) | **GET** /technique/referenced-by/{techniqueId} | 
[**techniqueTechniqueIdDelete**](DefaultApi.md#techniqueTechniqueIdDelete) | **DELETE** /technique/{techniqueId} | 
[**techniqueTechniqueIdGet**](DefaultApi.md#techniqueTechniqueIdGet) | **GET** /technique/{techniqueId} | 
[**techniqueTechniqueIdPost**](DefaultApi.md#techniqueTechniqueIdPost) | **POST** /technique/{techniqueId} | 
[**techniqueTechniqueIdPut**](DefaultApi.md#techniqueTechniqueIdPut) | **PUT** /technique/{techniqueId} | 
[**trainingunitExpandTrainingunitIdGet**](DefaultApi.md#trainingunitExpandTrainingunitIdGet) | **GET** /trainingunit/expand/{trainingunitId} | 
[**trainingunitGet**](DefaultApi.md#trainingunitGet) | **GET** /trainingunit | 
[**trainingunitReferencedByTrainingunitIdGet**](DefaultApi.md#trainingunitReferencedByTrainingunitIdGet) | **GET** /trainingunit/referenced-by/{trainingunitId} | 
[**trainingunitTrainingunitIdDelete**](DefaultApi.md#trainingunitTrainingunitIdDelete) | **DELETE** /trainingunit/{trainingunitId} | 
[**trainingunitTrainingunitIdGet**](DefaultApi.md#trainingunitTrainingunitIdGet) | **GET** /trainingunit/{trainingunitId} | 
[**trainingunitTrainingunitIdPost**](DefaultApi.md#trainingunitTrainingunitIdPost) | **POST** /trainingunit/{trainingunitId} | 
[**trainingunitTrainingunitIdPut**](DefaultApi.md#trainingunitTrainingunitIdPut) | **PUT** /trainingunit/{trainingunitId} | 


<a name="exerciseExerciseIdDelete"></a>
# **exerciseExerciseIdDelete**
> exerciseExerciseIdDelete(exerciseId)



### Example
```javascript
var MartialartsTracker = require('martialarts_tracker');

var apiInstance = new MartialartsTracker.DefaultApi();

var exerciseId = "exerciseId_example"; // String | ID of the exercise


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.exerciseExerciseIdDelete(exerciseId, callback);
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
var MartialartsTracker = require('martialarts_tracker');

var apiInstance = new MartialartsTracker.DefaultApi();

var exerciseId = "exerciseId_example"; // String | ID of the exercise


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.exerciseExerciseIdGet(exerciseId, callback);
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

<a name="exerciseExerciseIdPost"></a>
# **exerciseExerciseIdPost**
> Exercise exerciseExerciseIdPost(exerciseIdbody)



### Example
```javascript
var MartialartsTracker = require('martialarts_tracker');

var apiInstance = new MartialartsTracker.DefaultApi();

var exerciseId = "exerciseId_example"; // String | ID of the exercise

var body = new MartialartsTracker.Exercise(); // Exercise | ID of the exercise


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.exerciseExerciseIdPost(exerciseIdbody, callback);
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

<a name="exerciseExerciseIdPut"></a>
# **exerciseExerciseIdPut**
> Exercise exerciseExerciseIdPut(exerciseIdbody)



### Example
```javascript
var MartialartsTracker = require('martialarts_tracker');

var apiInstance = new MartialartsTracker.DefaultApi();

var exerciseId = "exerciseId_example"; // String | ID of the exercise

var body = new MartialartsTracker.Exercise(); // Exercise | ID of the exercise


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.exerciseExerciseIdPut(exerciseIdbody, callback);
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
var MartialartsTracker = require('martialarts_tracker');

var apiInstance = new MartialartsTracker.DefaultApi();

var exerciseId = "exerciseId_example"; // String | ID of the exercise


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.exerciseExpandExerciseIdGet(exerciseId, callback);
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
var MartialartsTracker = require('martialarts_tracker');

var apiInstance = new MartialartsTracker.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.exerciseGet(callback);
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

<a name="exerciseReferencedByExerciseIdGet"></a>
# **exerciseReferencedByExerciseIdGet**
> ExerciseReferencedBy exerciseReferencedByExerciseIdGet(exerciseId)



### Example
```javascript
var MartialartsTracker = require('martialarts_tracker');

var apiInstance = new MartialartsTracker.DefaultApi();

var exerciseId = "exerciseId_example"; // String | ID of the exercise


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.exerciseReferencedByExerciseIdGet(exerciseId, callback);
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
var MartialartsTracker = require('martialarts_tracker');

var apiInstance = new MartialartsTracker.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.metaSwaggerGet(callback);
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
var MartialartsTracker = require('martialarts_tracker');

var apiInstance = new MartialartsTracker.DefaultApi();

var methodId = "methodId_example"; // String | ID of the method


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.methodExpandMethodIdGet(methodId, callback);
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
var MartialartsTracker = require('martialarts_tracker');

var apiInstance = new MartialartsTracker.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.methodGet(callback);
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
var MartialartsTracker = require('martialarts_tracker');

var apiInstance = new MartialartsTracker.DefaultApi();

var methodId = "methodId_example"; // String | ID of the method


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.methodMethodIdDelete(methodId, callback);
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
var MartialartsTracker = require('martialarts_tracker');

var apiInstance = new MartialartsTracker.DefaultApi();

var methodId = "methodId_example"; // String | ID of the method


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.methodMethodIdGet(methodId, callback);
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

<a name="methodMethodIdPost"></a>
# **methodMethodIdPost**
> Method methodMethodIdPost(methodIdbody)



### Example
```javascript
var MartialartsTracker = require('martialarts_tracker');

var apiInstance = new MartialartsTracker.DefaultApi();

var methodId = "methodId_example"; // String | ID of the method

var body = new MartialartsTracker.Method(); // Method | ID of the method


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.methodMethodIdPost(methodIdbody, callback);
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

<a name="methodMethodIdPut"></a>
# **methodMethodIdPut**
> Method methodMethodIdPut(methodIdbody)



### Example
```javascript
var MartialartsTracker = require('martialarts_tracker');

var apiInstance = new MartialartsTracker.DefaultApi();

var methodId = "methodId_example"; // String | ID of the method

var body = new MartialartsTracker.Method(); // Method | ID of the method


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.methodMethodIdPut(methodIdbody, callback);
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

<a name="methodReferencedByMethodIdGet"></a>
# **methodReferencedByMethodIdGet**
> MethodReferencedBy methodReferencedByMethodIdGet(methodId)



### Example
```javascript
var MartialartsTracker = require('martialarts_tracker');

var apiInstance = new MartialartsTracker.DefaultApi();

var methodId = "methodId_example"; // String | ID of the method


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.methodReferencedByMethodIdGet(methodId, callback);
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
var MartialartsTracker = require('martialarts_tracker');

var apiInstance = new MartialartsTracker.DefaultApi();

var techniqueId = "techniqueId_example"; // String | ID of the technique


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.techniqueExpandTechniqueIdGet(techniqueId, callback);
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
var MartialartsTracker = require('martialarts_tracker');

var apiInstance = new MartialartsTracker.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.techniqueGet(callback);
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

<a name="techniqueReferencedByTechniqueIdGet"></a>
# **techniqueReferencedByTechniqueIdGet**
> TechniqueReferencedBy techniqueReferencedByTechniqueIdGet(techniqueId)



### Example
```javascript
var MartialartsTracker = require('martialarts_tracker');

var apiInstance = new MartialartsTracker.DefaultApi();

var techniqueId = "techniqueId_example"; // String | ID of the technique


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.techniqueReferencedByTechniqueIdGet(techniqueId, callback);
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
var MartialartsTracker = require('martialarts_tracker');

var apiInstance = new MartialartsTracker.DefaultApi();

var techniqueId = "techniqueId_example"; // String | ID of the technique


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.techniqueTechniqueIdDelete(techniqueId, callback);
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
var MartialartsTracker = require('martialarts_tracker');

var apiInstance = new MartialartsTracker.DefaultApi();

var techniqueId = "techniqueId_example"; // String | ID of the technique


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.techniqueTechniqueIdGet(techniqueId, callback);
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

<a name="techniqueTechniqueIdPost"></a>
# **techniqueTechniqueIdPost**
> Technique techniqueTechniqueIdPost(techniqueIdbody)



### Example
```javascript
var MartialartsTracker = require('martialarts_tracker');

var apiInstance = new MartialartsTracker.DefaultApi();

var techniqueId = "techniqueId_example"; // String | ID of the technique

var body = new MartialartsTracker.Technique(); // Technique | ID of the technique


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.techniqueTechniqueIdPost(techniqueIdbody, callback);
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

<a name="techniqueTechniqueIdPut"></a>
# **techniqueTechniqueIdPut**
> Technique techniqueTechniqueIdPut(techniqueIdbody)



### Example
```javascript
var MartialartsTracker = require('martialarts_tracker');

var apiInstance = new MartialartsTracker.DefaultApi();

var techniqueId = "techniqueId_example"; // String | ID of the technique

var body = new MartialartsTracker.Technique(); // Technique | ID of the technique


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.techniqueTechniqueIdPut(techniqueIdbody, callback);
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
var MartialartsTracker = require('martialarts_tracker');

var apiInstance = new MartialartsTracker.DefaultApi();

var trainingunitId = "trainingunitId_example"; // String | ID of the trainingunit


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trainingunitExpandTrainingunitIdGet(trainingunitId, callback);
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
var MartialartsTracker = require('martialarts_tracker');

var apiInstance = new MartialartsTracker.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trainingunitGet(callback);
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

<a name="trainingunitReferencedByTrainingunitIdGet"></a>
# **trainingunitReferencedByTrainingunitIdGet**
> TrainingunitReferencedBy trainingunitReferencedByTrainingunitIdGet(trainingunitId)



### Example
```javascript
var MartialartsTracker = require('martialarts_tracker');

var apiInstance = new MartialartsTracker.DefaultApi();

var trainingunitId = "trainingunitId_example"; // String | ID of the trainingunit


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trainingunitReferencedByTrainingunitIdGet(trainingunitId, callback);
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
var MartialartsTracker = require('martialarts_tracker');

var apiInstance = new MartialartsTracker.DefaultApi();

var trainingunitId = "trainingunitId_example"; // String | ID of the trainingunit


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.trainingunitTrainingunitIdDelete(trainingunitId, callback);
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
var MartialartsTracker = require('martialarts_tracker');

var apiInstance = new MartialartsTracker.DefaultApi();

var trainingunitId = "trainingunitId_example"; // String | ID of the trainingunit


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trainingunitTrainingunitIdGet(trainingunitId, callback);
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

<a name="trainingunitTrainingunitIdPost"></a>
# **trainingunitTrainingunitIdPost**
> Trainingunit trainingunitTrainingunitIdPost(trainingunitIdbody)



### Example
```javascript
var MartialartsTracker = require('martialarts_tracker');

var apiInstance = new MartialartsTracker.DefaultApi();

var trainingunitId = "trainingunitId_example"; // String | ID of the trainingunit

var body = new MartialartsTracker.Trainingunit(); // Trainingunit | ID of the trainingunit


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trainingunitTrainingunitIdPost(trainingunitIdbody, callback);
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

<a name="trainingunitTrainingunitIdPut"></a>
# **trainingunitTrainingunitIdPut**
> Trainingunit trainingunitTrainingunitIdPut(trainingunitIdbody)



### Example
```javascript
var MartialartsTracker = require('martialarts_tracker');

var apiInstance = new MartialartsTracker.DefaultApi();

var trainingunitId = "trainingunitId_example"; // String | ID of the trainingunit

var body = new MartialartsTracker.Trainingunit(); // Trainingunit | ID of the trainingunit


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trainingunitTrainingunitIdPut(trainingunitIdbody, callback);
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

