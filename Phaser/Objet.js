class Objet {
    constructor(name, price, range, cd, ammo, lag, pvMod, manaMod, poiseMod, speedMod, animAtt, animZone){
        var _name = name;
	      var _price = price;
	      var _range = range;
	      var _cooldown = cd;
	      var _ammo = ammo;
	      var _direction;
	      var _lag = lag;
	      var _pvMod = pvMod;
	      var _manaMod = manaMod;
	      var _poiseMod = poiseMod;
	      var _speedMod = speedMod;
	      var _animAtt = animAtt;
	      var _animZone = animZone;

        this.getName= function(){ return _name};
        this.getPrice= function(){ return _price};
        this.getRange= function(){ return _range};
        this.getCooldown= function(){ return _cooldown};
        this.getAmmo= function(){return _ammo};
        this.getDirection = function(){return _direction};
        this.getPvMod = function(){return _pvMod};
        this.getManaMod = function(){return _manaMod};
        this.getPoiseMod = function(){return _poiseMod};
        this.getSpeedMod = function(){return _speedMod};
        this.getAnimAtt = function(){return _animAtt};
        this.getAnimZone = function(){return _animZone};
    }

}
