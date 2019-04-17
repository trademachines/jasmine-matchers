const { SNS } = require('aws-sdk');
const _       = require('lodash');

class Service {
  serviceFn() {
  }
}

class ExtendedService extends Service {
  extendedServiceFn() {
  }
}


describe('jasmine utils', () => {
  describe('createSpyObjFrom', () => {
    it('creates spy from simple class', () => {
      const spy = jasmine.createSpyObjFrom(Service);

      expect(spy).toHaveMethod('serviceFn');
    });

    it('creates spy from inheriting classes', () => {
      const spy = jasmine.createSpyObjFrom(ExtendedService);

      expect(spy).toHaveMethod('extendedServiceFn');
      expect(spy).toHaveMethod('serviceFn');
    });

    it('creates spies that can be called', () => {
      const spy = jasmine.createSpyObjFrom(ExtendedService);

      spy.serviceFn.and.returnValue('foo');
      spy.extendedServiceFn.and.returnValue('bar');

      expect(spy.serviceFn()).toEqual('foo');
      expect(spy.serviceFn).toHaveBeenCalled();

      expect(spy.extendedServiceFn()).toEqual('bar');
      expect(spy.extendedServiceFn).toHaveBeenCalled();
    });

    it('creates spies from AWS services', () => {
      const spy = jasmine.createSpyObjFrom(SNS);

      expect(_.functions(spy)).toEqual([
        'addPermission', 'checkIfPhoneNumberIsOptedOut', 'confirmSubscription', 'createPlatformApplication',
        'createPlatformEndpoint', 'createTopic', 'deleteEndpoint', 'deletePlatformApplication',
        'deleteTopic', 'getEndpointAttributes', 'getPlatformApplicationAttributes', 'getSMSAttributes',
        'getSubscriptionAttributes', 'getTopicAttributes', 'listEndpointsByPlatformApplication',
        'listPhoneNumbersOptedOut', 'listPlatformApplications', 'listSubscriptions', 'listSubscriptionsByTopic',
        'listTopics', 'optInPhoneNumber', 'publish', 'removePermission', 'setEndpointAttributes',
        'setPlatformApplicationAttributes', 'setSMSAttributes', 'setSubscriptionAttributes', 'setTopicAttributes',
        'subscribe', 'unsubscribe'
      ]);
    });
  });
});
