var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {

  object[key] = value;

  return object;
}

//function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {

//  return object.Assign({}, object, {key: value});
//}
