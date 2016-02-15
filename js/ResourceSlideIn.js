
(function($) {
    $.extend({
    	resourceSlideInActive: false,

    	resourceSlideIn: function(data) {
    		if($.resourceSlideInActive) {
    			return;
    		}
    		if(!data) {
    			data = {
    				resource: 'ASSY-RES',
    				description: 'For assembly',
    				resStatus: 'In Work',
    				sfcList:[{
    					sfc: 'BX-12316456453',
    					status: 'In Work',
    					materialVer: 'BOX-ITEM-1/A',
    					operation: 'ASSY'
    				}, {
    					sfc: 'BX-12316456454',
    					status: 'In Work',
    					materialVer: 'BOX-ITEM-1/A',
    					operation: 'ASSY'
    				},{
    					sfc: 'BX-12316456455',
    					status: 'In Queue',
    					materialVer: 'BOX-ITEM-1/A',
    					operation: 'ASSY'
    				},{
    					sfc: 'BX-12316456456',
    					status: 'In Queue',
    					materialVer: 'BOX-ITEM-1/A',
    					operation: 'ASSY'
    				},{
    					sfc: 'BX-12316456457',
    					status: 'In Queue',
    					materialVer: 'BOX-ITEM-1/A',
    					operation: 'ASSY'
    				}]
    			}
    		}
    		var resourceSlideIn;
    		if($('#resourceSlideIn').length > 0) {
					resourceSlideIn = $('#resourceSlideIn');
    		}
    		else {
    			var resourceSlideIn = `
    				<div id="resourceSlideIn" class="slideIn">
    					<div class="slideInTitle">
    						Resource Information
						</div>
						<div class="slideInRow">
							<div class="slideInItem">
								<b>Description:</b><p bind="description"></p>
							</div>
							<div class="slideInItem">
								<b>Status:</b><p bind="resStatus"></p>
							</div>
						</div>
						<div class="slideInRow">
							<div class="slideInItem">
								<b>Status:</b><p bind="resStatus"></p>
							</div>
						</div>
						<div class="slideInCollapse">
							<div class="slideInCollapseTitle">
								<b>SFC List</b>
								<image id="sfcListArrow" src="image/arrow-left.png" sfcCollapseContent="sfcList">
							</div>
							<div id="sfcList" class="slideInCollapseContent">
								<table>
									<tr>
										<th>SFC</th>
										<th>Status</th>
										<th>Material/Ver</th>
										<th>Operation</th>
									</tr>
									<tr repeat="sfc in sfcList">
										<td bind="sfc.sfc"></td>
										<td bind="sfc.status"></td>
										<td bind="sfc.materialVer"></td>
										<td bind="sfc.operation"></td>
									</tr>
								</table>
							</div>
						</div>
    				</div>
    				`;
				$('body:eq(0)').prepend(resourceSlideIn);

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

    			resourceSlideIn = $('#resourceSlideIn');
    		}
    		resourceSlideIn.animate({"right":"0px"}, "slow");
    		$.resourceSlideInActive = true;
    	},

    	resourceSlideOut: function() {
    		if(!$.resourceSlideInActive) {
    			return;
    		}
    		var resourceSlideIn = $('#resourceSlideIn');
    		resourceSlideIn.animate({"right":"-500"}, "slow");
    		$.resourceSlideInActive = false;
    	},

    	updateResourceSlideInModel: function(data) {
    		$$.bind(data);
    	}
    });
})(jQuery);