// Test Suite & Specs

describe("getMarkets", function() {
  var url;
  var toMarkets;

  beforeEach(function() {
    url = new Url();
    toMarkets = new ToMarkets();
  });

  it("should be able to receive API data toMarkets", function() {
    url.get(toMarkets);
    expect(url.currentlyGettingtoMarkets).toEqual(toMarkets);

    //demonstrates use of custom matcher
    expect(url).toBeGetting(toMarkets);
  });

  describe("when toMarkets has been received", function() {
    beforeEach(function() {
      url.get(toMarkets);
      url.pause();
    });

    it("should indicate that the toMarkets is currently received", function() {
      expect(url.isReceived).toBeFalsy();

      // demonstrates use of 'not' with a custom matcher
      expect(url).not.toBeReceived(toMarkets);
    });

    it("should be possible to show data on table", function() {
      url.resume();
      expect(url.isReceiving).toBeTruthy();
      expect(url.currentlyReceivingtoMarkets).toEqual(toMarkets);
    });
  });

  // demonstrates use of spies to intercept and test method calls
  it("tells the current toMarkets if the user has made it a favorite", function() {
    spyOn(toMarkets, 'persistFavoriteStatus');

    url.get(toMarkets);
    url.makeFavorite();

    expect(toMarkets.persistFavoriteStatus).toHaveBeenCalledWith(true);
  });

  //demonstrates use of expected exceptions
  describe("#resume", function() {
    it("should throw an exception if toMarkets is already received", function() {
      url.get(toMarkets);

      expect(function() {
        url.isReceived();
      }).toThrowError("toMarkets is already received");
    });
  });
});
