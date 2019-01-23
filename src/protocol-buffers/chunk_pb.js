/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.FloatChunk', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.FloatChunk = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.FloatChunk.repeatedFields_, null);
};
goog.inherits(proto.FloatChunk, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.FloatChunk.displayName = 'proto.FloatChunk';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.FloatChunk.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.FloatChunk.prototype.toObject = function(opt_includeInstance) {
  return proto.FloatChunk.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.FloatChunk} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FloatChunk.toObject = function(includeInstance, msg) {
  var f, obj = {
    index: jspb.Message.getFieldWithDefault(msg, 1, 0),
    downsampling: jspb.Message.getFieldWithDefault(msg, 2, 0),
    cutoff: jspb.Message.getFieldWithDefault(msg, 3, 0),
    samplesList: jspb.Message.getRepeatedFloatingPointField(msg, 4)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.FloatChunk}
 */
proto.FloatChunk.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.FloatChunk;
  return proto.FloatChunk.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.FloatChunk} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.FloatChunk}
 */
proto.FloatChunk.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setIndex(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDownsampling(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCutoff(value);
      break;
    case 4:
      var value = /** @type {!Array<number>} */ (reader.readPackedFloat());
      msg.setSamplesList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.FloatChunk.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.FloatChunk.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.FloatChunk} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FloatChunk.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIndex();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getDownsampling();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getCutoff();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getSamplesList();
  if (f.length > 0) {
    writer.writePackedFloat(
      4,
      f
    );
  }
};


/**
 * optional int64 index = 1;
 * @return {number}
 */
proto.FloatChunk.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.FloatChunk.prototype.setIndex = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 downsampling = 2;
 * @return {number}
 */
proto.FloatChunk.prototype.getDownsampling = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.FloatChunk.prototype.setDownsampling = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 cutoff = 3;
 * @return {number}
 */
proto.FloatChunk.prototype.getCutoff = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.FloatChunk.prototype.setCutoff = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated float samples = 4;
 * @return {!Array<number>}
 */
proto.FloatChunk.prototype.getSamplesList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 4));
};


/** @param {!Array<number>} value */
proto.FloatChunk.prototype.setSamplesList = function(value) {
  jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.FloatChunk.prototype.addSamples = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


proto.FloatChunk.prototype.clearSamplesList = function() {
  this.setSamplesList([]);
};


goog.object.extend(exports, proto);