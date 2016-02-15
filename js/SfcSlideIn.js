
(function($) {
    $.extend({
    	sfcSlideInActive: false,

    	sfcSlideIn: function(data) {
    		if($.sfcSlideInActive) {
    			return;
    		}
    		if(!data) {
    			data = {
    				sfc: 'BX-12316456453',
    				status: 'In Work',
    				materialVer: 'BOX-ITEM-1/A',
    				qty: 1,
    				shopOrder: 'BOX-ITEM-43535',
    				orderType: 'Production',
    				asBuild: [{
    					name: 'BY-2131231'
    				}, {
    					name: 'BY-2121414'
    				}],
    				dc: [{
    					group: 'DG1',
  						param: 'Width',
  						value: '40cm',
  						operation: 'TEST',
  						resource: 'TEST-RES-1'
    				},{
    					group: 'DG1',
  						param: 'Length',
  						value: '60cm',
  						operation: 'TEST',
  						resource: 'TEST-RES-1'
    				}, {
    					group: 'DG2',
    					param: 'Weight',
  						value: '5kg',
  						operation: 'TEST',
  						resource: 'TEST-RES-1'
    				}]
    			}
    		}
    		var sfcSlideIn;
    		if($('#sfcSlideIn').length > 0) {
				sfcSlideIn = $('#sfcSlideIn');
    		}
    		else {
    			var sfcSlideInDiv = `
    				<div id="sfcSlideIn" class="slideIn">
    					<div class="slideInTitle">
    						SFC Information
						</div>
						<div class="slideInRow">
							<div class="slideInItem">
								<b>SFC:</b><p bind="sfc"></p>
							</div>
							<div class="slideInItem">
								<b>Status:</b><p bind="status"></p>
							</div>
						</div>
						<div class="slideInRow">
							<div class="slideInItem">
								<b>Material/Ver:</b><p bind="materialVer"></p>
							</div>
							<div class="slideInItem">
								<b>Qty:</b><p bind="qty"></p>
							</div>
						</div>
						<div class="slideInRow">
							<div class="slideInItem">
								<b>ShopOrder:</b><p bind="shopOrder"></p>
							</div>
							<div class="slideInItem">
								<b>OrderType:</b><p bind="orderType"></p>
							</div>
						</div>
						<div class="slideInCollapse">
							<div class="slideInCollapseTitle">
								<b>As-Build Information</b>
								<image id="asBuildArrow" src="image/arrow-left.png" sfcCollapseContent="asBuildContent">
							</div>
							<div id="asBuildContent" class="slideInCollapseContent">
								<div class="slideInRow" repeat="comp in asBuild">
									<div class="slideInItem">
										<b>Component:</b><p bind="comp.name"></p>
									</div>
								</div>
							</div>
						</div>
						<div class="slideInCollapse">
							<div class="slideInCollapseTitle">
								<b>DC Information</b>
								<image id="dcArrow" src="image/arrow-left.png" sfcCollapseContent="dcContent">
							</div>
							<div id="dcContent" class="slideInCollapseContent">
								<table>
									<tr>
										<th>DC Group</th>
										<th>Param</th>
										<th>Value</th>
										<th>Operation</th>
										<th>Resource</th>
									</tr>
									<tr repeat="dcRecord in dc">
										<td bind="dcRecord.group"></td>
										<td bind="dcRecord.param"></td>
										<td bind="dcRecord.value"></td>
										<td bind="dcRecord.operation"></td>
										<td bind="dcRecord.resource"></td>
									</tr>
								</table>
							</div>
						</div>
						<div class="slideInCollapse">
							<div class="slideInCollapseTitle">
								<b>NC Information</b>
								<image id="ncArrow" src="image/arrow-left.png" sfcCollapseContent="ncContent">
							</div>
							<div id="ncContent" class="slideInCollapseContent" style="padding-left: 5%">
								None
							</div>
						</div>
    				</div>
    				`;
				$('body:eq(0)').prepend(sfcSlideInDiv);

				$$.bind(data);

				$('[sfcCollapseContent]').each(function() {
					var contentId = $(this).attr('sfcCollapseContent');
					var content = $('#' + contentId);
					$(this).click(function(e) {
						var animationStyle = $(this).css('-webkit-animation');
						console.log(animationStyle);
						if(animationStyle.indexOf('rotate90') < 0) {
							$(this).css('-webkit-animation', 'rotate90 0.5s forwards');
						}
						else {
							$(this).css('-webkit-animation', 'rotateBack90 0.5s');
						}
						content.slideToggle();
					});
				});

    			sfcSlideIn = $('#sfcSlideIn');
    		}
    		sfcSlideIn.animate({"right":"0px"}, "slow");
    		$.sfcSlideInActive = true;
    	},

    	sfcSlideOut: function() {
    		if(!$.sfcSlideInActive) {
    			return;
    		}
    		var sfcSlideIn = $('#sfcSlideIn');
    		sfcSlideIn.animate({"right":"-500"}, "slow");
    		$.sfcSlideInActive = false;
    	},

    	updateSfcSlideInModel: function(data) {
    		$$.bind(data);
    	}
    });
})(jQuery);