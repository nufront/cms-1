!function(a){Craft.RecentEntriesWidget=Garnish.Base.extend({params:null,$widget:null,$body:null,$container:null,$tbody:null,hasEntries:null,init:function(t,i){this.params=i,this.$widget=a("#widget"+t),this.$body=this.$widget.find(".body:first"),this.$container=this.$widget.find(".recententries-container:first"),this.$tbody=this.$container.find("tbody:first"),this.hasEntries=!!this.$tbody.length,this.$widget.data("widget").on("destroy",a.proxy(this,"destroy")),Craft.RecentEntriesWidget.instances.push(this)},addEntry:function(t){this.$container.css("margin-top",0);var i=this.$container.height();if(!this.hasEntries){var e=a('<table class="data fullwidth"/>').prependTo(this.$container);this.$tbody=a("<tbody/>").appendTo(e)}this.$tbody.prepend('<tr><td><a href="'+t.url+'">'+Craft.escapeHtml(t.title)+'</a> <span class="light">'+Craft.escapeHtml((t.dateCreated?Craft.formatDate(t.dateCreated):"")+(t.dateCreated&&t.username&&Craft.edition>=Craft.Client?", ":"")+(t.username&&Craft.edition>=Craft.Client?t.username:""))+"</span></td></tr>");var n=this.$container.height()-i;this.$container.css("margin-top",-n);var s={"margin-top":0};this.hasEntries||(s["margin-bottom"]=-i,this.hasEntries=!0),this.$container.velocity(s)},destroy:function(){Craft.RecentEntriesWidget.instances.splice(a.inArray(this,Craft.RecentEntriesWidget.instances),1),this.base()}},{instances:[]})}(jQuery);
//# sourceMappingURL=RecentEntriesWidget.js.map