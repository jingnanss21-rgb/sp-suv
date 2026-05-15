
const SUPA_URL='https://wiyarxoivfmkneumfmbl.supabase.co';
const SUPA_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpeWFyeG9pdmZta25ldW1mbWJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUzOTExMDYsImV4cCI6MjA5MDk2NzEwNn0.jo1GoR3ZuFv2HFZcVoOKpVb19SBUIHZL3EoR266njU4';
const supa=window.supabase.createClient(SUPA_URL,SUPA_KEY,{auth:{persistSession:false,autoRefreshToken:false}});
// 加载已有反馈
const _fbCache={"18495_screen_fb0410":"4/10 考虑代金券方案，下周给答复","19193_screen_fb0410":"4/10沟通代金券方案和基建未回复","19193_screen_biz":"代金券投放中","19095_screen_fb0410":"0410品牌确认中，下午给答复，已回复","19095_screen_biz":"会员占比超过50%","18496_screen_fb0410":"4/10客成找品牌确认中","9992_screen_fb0410":"4/9沟通代金券方案，未回复","7865_screen_fb0410":"4/10：会员占比40%左右；门店处理中，下周完成","5048_screen_fb0410":"4/9：会员占比21%；品牌配合意愿度高，建议不下线、轻运营","8184_screen_fb0410":"4/10：会员占比超50%，品牌已经在沟通商户号超管确认中，4.14前录完","7333_screen_fb0410":"4/10：已重新催促品牌，品牌表示最近忙，4.13前处理完","2813_screen_fb0410":"4/13前：商户号全部授权完成；会员占比<40%，品牌配合意愿度高，建议不下线、轻运营","7623_screen_fb0410":"4/9：未回复，计划4/13操作下线","17282_screen_fb0410":"4/10：品牌商户号已经录入完整 4/9：品牌在确认重新录入中","5269_screen_fb0410":"4/9：全国2个商户号，均已授权完成","5705_screen_fb0410":"4/9：品牌反馈堂食单量少，不计划继续运营投放计划——4/10操作下线（已操作下线）","10923_screen_fb0410":"4/10：已跟品牌沟通切换代金券，品牌同意，下周操作","10923_screen_biz":"代金券投放中","9384_screen_fb0410":"4/9：会员占比20-23%，品牌一直有宣导门店引导用户扫小程序注册会员，支持用户出示付款码时就可以识别会员身份，进行券资产抵扣；品牌配合意愿度高，建议不下线、轻运营","18138_screen_fb0410":"4/10：品牌已补充录入","9262_screen_fb0410":"品牌已下线","8440_screen_fb0410":"会员占比57%","18235_screen_fb0410":"4/10：公线门店不准，已修改","16577_screen_fb0410":"4/9：会员占比60%","11519_screen_fb0410":"4/9：会员占比75%，商户号品牌正在关联确认中","7072_screen_fb0410":"4/10：会员占比45%左右，门店会积极引导顾客注册小程序会员","16708_screen_fb0410":"4/10：品牌未回复，非top800","8573_screen_fb0410":"4/9：会员占比89.05%，品牌100家门店都用4个商户号收款，商户号最晚4/15前完成","18045_screen_fb0410":"品牌只有1家门店","17279_screen_fb0410":"品牌无在投放活动，已下线","16995_screen_fb0410":"该品牌只有2家门店，均上传成功","15630_screen_fb0410":"品牌无在投放活动，已下线","18918_screen_fb0410":"4.9：会员占比52.96%；门店已提交上传；","18802_screen_fb0410":"4.10：品牌未回复","18323_screen_fb0410":"4.10：品牌未回复","18224_screen_fb0410":"4.10：已同步品牌转代金券，但未回复","18171_screen_fb0410":"4.10：品牌未回复","17117_screen_fb0410":"4.9：还有一家门店无法上传的原因是poi被占用，这个需要内部处理，已反馈处理中","11425_screen_fb0410":"4.10：品牌只投放深圳地区的门店，剩余门店正在上传中","9992_screen_biz":"代金券投放中","10597_screen_infra":"经营规模小，1店<10笔合理","1403_screen_fb0410":"品牌已下线","11092_screen_fb0410":"品牌已下线","9262_screen_store":"商家无法上传，计划下线","3699_screen_store":"商家无法上传，计划下线","11092_screen_store":"商家无法上传，计划下线","18138_screen_store":"沟通确认中","10597_screen_fb0410":"4/10：会员占比7%，会要求门店店员引导用户注册会员的，主要是小程序扫码引导注册；已沟通代金券，品牌内部确认中；商户号已完成（全国一个商户号），门店上传进行中（当前已经89%）","18357_screen_remark":"会员占比29.91%，代金券沟通中","18235_screen_store":"公线真实门店不准需修正","16708_screen_infra":"沟通确认中","7865_screen_store":"沟通确认中","10923_screen_remark":"全场称重菜品9折；4/8：询问品牌未回复","17282_screen_remark":"按本周内完成所有优化","8440_screen_remark":"9.9元经典凉茶系列任选兑换券（全渠道最优）","18224_screen_remark":"会员占比45%，代金券沟通中，暂时观察看到店核销","5048_screen_biz":"沟通确认中","6827_screen_fb0410":"4/10：品牌预计今日处理完毕","8573_screen_remark":"整单73折","8069_screen_fb0410":"4/10：会员占比56%，已沟通全场7折券，具体更换货盘时间需到4/14确认","8914_screen_fb0410":"4/9：会员占比30%+，下沉门店较多；品牌配合意愿度高，建议不下线、轻运营","18540_screen_fb0410":"4/10：会员占比15%，目前门店有两个系统，其中还有一半是没切换到企迈系统的，所以只上传了切换到企迈系统的门店信息（200家）；品牌配合意愿度高，建议不下线、轻运营","8914_screen_biz":"沟通确认中","5660_screen_fb0410":"4/9：会员占比40%+；商户号已完成商户号关联（品牌反馈，在营业的门店商户号有134家，已关联的商户号有189家-闭店的也关联了-沟通删除中），商户号只有4家没关联（已催超管确认）","5705_screen_biz":"不接受代金券，计划下线","8069_screen_remark":"历史优先上线全场券，仅能提供全场饮品95折；本周内沟通更低折扣货盘","7333_screen_remark":"按本周内完成所有优化工作推进","18540_screen_store":"沟通确认中","18540_screen_biz":"沟通确认中","2248_screen_fb0410":"4/10品牌已经处理完毕","10597_screen_store":"沟通确认中","5173_screen_fb0410":"4/9：品牌未回复会员占比，计划4/13操作下线","2813_screen_biz":"沟通确认中","18715_screen_remark":"1、品牌侧：多次沟通，无法提供全场券；2、3月遇到“在非券可用城市曝光，导致客诉”问题，对平台信任感下降。","18715_screen_fb0410":"4/13：已下线","2813_screen_remark":"按本周内完成所有优化","7623_screen_store":"商家无法上传，计划下线","5173_screen_biz":"沟通确认中","5269_screen_remark":"按本周内完成所有优化","16594_screen_remark":"整单75折，之前存活较好，近期未存活","19495_screen_biz":"沟通确认中","19495_screen_fb0410":"会员占比40%，代金券他们需内部沟通提报","11981_screen_fb0410":"会员占比只有26%，代金券他们需内部沟通提报，短时间没法给答复","11304_screen_fb0410":"正在把其余门店补齐","13297_screen_fb0410":"沟通中，美抖都是单品，并没有代金券","13593_screen_fb0410":"会员占比超50%","11601_screen_fb0410":"会员占比超50%","2250_screen_fb0410":"会员占比超50%","9536_screen_fb0410":"货盘他们内部评估下，担忧再降低门店接受度不高","5801_screen_biz":"沟通确认中","18207_screen_store":"沟通确认中","18207_screen_fb0410":"与品牌沟通确认了，正在补齐","13650_screen_fb0410":"正在补齐门店","18051_screen_fb0410":"品牌已补全门店，正在审核当中","11461_screen_fb0410":"会员占比11.74%，门店店员会指引消费者在消费前先注册会员，且目前品牌在与服务商沟通展码路径","2459_screen_remark":"品牌反馈品牌小程序交易属性低，几乎都是到店核销，且会员占比45%-50%，且门店会引导用户注册会员","3088_screen_fb0410":"已流失","18383_screen_fb0410":"会员占比1.9%，银豹商户","16576_screen_fb0410":"会员交易占比3.6%，银豹商户","18481_screen_fb0410":"品牌反馈他们只能录入成都地区的门店且成都地区的门店已全部录入","18279_screen_fb0410":"品牌目前未回复","13388_screen_fb0410":"品牌目前未回复","16553_screen_fb0410":"商户号超管未授权已让服务商销售跟进，会员占比数据品牌目前未导出","16453_screen_fb0410":"品牌未回复","3688_screen_fb0410":"品牌未回复","16934_screen_fb0410":"品牌未回复","18302_screen_fb0410":"品牌未回复","17263_screen_fb0410":"1，商户号超管未授权，已催促服务商销售跟进。2.会员占比20.53%，西快行业","16585_screen_fb0410":"怀疑是小程序注册会员路径有问题，已在服务商后台重新设置了指引小程序会员注册的路径，可以先观察一个月","7157_screen_store":"沟通确认中","18570_screen_store":"沟通确认中","11211_screen_store":"公线真实门店不准需修正","18890_screen_fb0410":"0410未回复","9384_screen_biz":"沟通确认中","8573_screen_price":"全场券","13650_screen_store":"沟通确认中","5705_screen_infra":"沟通确认中","8069_screen_biz":"会员占比超过50%","1575_screen_remark":"稳定存活","19012_screen_infra":"经营规模小，1店<10笔合理","19012_screen_fb0410":"会员交易占比：18.86%；品牌目前是银行支付通道，暂时没法绑定交易连接名片","19012_screen_biz":"代金券投放中","19012_screen_remark":"会员占比18.86%，代金券模式确认参与；微信商户号已绑全，但是大量支付走银联","18918_screen_biz":"会员占比超过50%","19193_screen_remark":"会员占比14.81%，代金券沟通中；商户号门店确认中","18564_screen_remark":"商户号门店确认中","18492_screen_remark":"会员占比品牌出差暂时无法确认；商户号门店确认中","18492_screen_infra":"基建沟通中","11532_screen_price":"沟通确认中","16686_screen_fb0410":"货盘为无门槛立减3元，是目前该品牌跑的最好的货盘","18703_screen_fb0410":"1，满10-2的活动=8折，美团也是8折代金券。2，Q一族3.1元立减券，限制的品类是13元-3.1=9.9兑换，其他平台有同样单品的活动为11.9兑换。3，未录入的门店已重新录入","18495_screen_remark":"会员占比26.14%，代金券沟通中","18136_screen_biz":"会员占比超过50%","18045_screen_store":"公线真实门店不准需修正","16995_screen_store":"公线真实门店不准需修正","18570_screen_fb0410":"1，其余未录入门店已新增在审核中   ","18495_screen_biz":"沟通确认中","11211_screen_fb0410":"该品牌所有参与活动的门店已全部录入，且一共有240家门店，其余未录入的门店因品牌近期在更换总部账号目前无法录入","5801_screen_store":"沟通确认中","7192_screen_fb0410":"品牌公司近期在大量变更微信商户号，摇一摇工作需要等变更完成后再进行下一步处理","17172_screen_fb0410":"尾部，且仅一家","18564_screen_biz":"会员占比超过50%","18057_screen_fb0410":"品牌无在投放活动，已下线","18044_screen_fb0410":"尾部，且仅一家","18220_screen_fb0410":"尾部，且仅一家","16872_screen_fb0410":"尾部，且仅一家","17172_screen_store":"公线真实门店不准需修正","18044_screen_store":"公线真实门店不准需修正","18220_screen_store":"公线真实门店不准需修正","17117_screen_biz":"会员占比超过50%","16872_screen_store":"公线真实门店不准需修正","16704_screen_biz":"会员占比超过50%","5801_screen_fb0410":"美团商户，目前走的商家券形式，计划切换为商品券，门店到时候集中在美团后台录入","19194_screen_fb0410":"商家未回复","17397_screen_fb0410":"尾部，且商户今天上传未上传的门店","18115_screen_fb0410":"已更新，新的门店在审核中","4619_screen_fb0410":"已流失","19192_screen_fb0410":"尾部","17395_screen_fb0410":"品牌已下线","16619_screen_fb0410":"品牌已下线","11762_screen_fb0410":"品牌已下线","2459_screen_fb0410":"品牌新开了门店，目前品牌在询问服务商新开的门店是会自动同步上传还是需要手动录入","3699_screen_fb0410":"品牌已下线","3050_screen_fb0410":"每个区域的负责人不同，也只清楚自己区域的情况，当前群内对接只有深圳、北广佛、长沙区域","3050_screen_store":"沟通确认中","3050_screen_infra":"沟通确认中","11304_screen_store":"沟通确认中","18496_screen_biz":"会员占比超过50%","7157_screen_fb0410":"1，货盘问题：再与克茗进一步谈更加优惠的货盘    2，品牌反馈一共39家店已全部录入还有两家1月23日已登记地图审核催办表格但一直未处理","8184_screen_biz":"会员占比超过50%","2913_screen_fb0410":"门店正在沟通中，线下的真实门店以面包为主，摇一摇的适用门店是蛋糕，线下门店很少","1403_screen_store":"商家无法上传，计划下线","13593_screen_biz":"会员占比超过50%","18278_screen_store":"公线真实门店不准需修正","18278_screen_fb0410":"总共三家，已全部录入完成","18564_screen_infra":"基建沟通中","18366_screen_fb0410":"品牌反馈所有门店都已录入完成","18454_screen_fb0410":"还有一家门店品牌不参与摇一摇，已联系品牌录入","18357_screen_biz":"不接受代金券，计划下线","17380_screen_fb0410":"1，上线初期品牌已提供给其他品牌的供货价为88折，而微信摇优惠的优惠为85折，优于其他平台。2，目前其他平台活动均已下线","17380_screen_remark":"上线时品牌方已提供给其他平台的供货价为88折，提供微信摇一摇的折扣是85折","15390_screen_fb0410":"1，门店问题由于该品牌只有12家店开通了美团会员功能模块所以只能录入12家门店，经核实12家门店已全部录入成功了","18703_screen_store":"沟通确认中","18696_screen_remark":"品牌仅支持线上下单，无线下收款场景，且已绑定小程序由于目前该品牌公域订单偏高所有导致小程序交易数据偏低","18481_screen_biz":"会员占比超过50%","18051_screen_store":"沟通确认中","18481_screen_store":"沟通确认中","18051_screen_biz":"沟通确认中","18696_screen_infra":"经营规模小，1店<10笔合理","11981_screen_biz":"沟通确认中","18492_screen_fb0410":"品牌不愿提供会员占比数据","18713_screen_fb0410":"品牌不愿提供会员占比数据","18454_screen_store":"沟通确认中","19141_screen_fb0410":"品牌实际只有一家门店，已经录入完成","17474_screen_fb0410":"品牌实际只有一家门店，已经录入完成","19141_screen_store":"公线真实门店不准需修正","2913_screen_store":"沟通确认中","18366_screen_store":"公线真实门店不准需修正","11206_screen_store":"商家无法上传，计划下线","19012_screen_store":"公线真实门店不准需修正","18357_screen_fb0410":"会员交易占比：26.91%","11206_screen_fb0410":"品牌内部有变动，摇一摇活动暂不上线","18907_screen_fb0410":"品牌不愿提供会员占比数据","7157_screen_price":"全场券","16607_screen_fb0410":"品牌摇一摇需要暂停","16934_screen_biz":"沟通确认中","18302_screen_store":"沟通确认中","17474_screen_store":"公线真实门店不准需修正","16607_screen_store":"商家无法上传，计划下线","18302_screen_biz":"沟通确认中","18136_screen_remark":"经和品牌核实，该品牌仅支持堂食且堂食大部分均为小程序付款，只有当订单有存疑时才会使用pos机收款","18564_screen_fb0410":"会员交易占比：55.27%；商户号品牌已经补入，在联系超管确认中","17282_screen_biz":"会员占比超过50%","18696_screen_fb0410":"1，商户号问题：因品牌仅有线上交易且已绑定小程序。2，关于小程序渗透问题品牌反馈目前他们业态目前公域订单量会比较多所以导致小程序交易比较少","15441_screen_fb0410":"经与品牌核实所有的交易均进入总的收款商户号且该商户号已绑定","16686_screen_price":"全场券","12175_screen_remark":"小程序交易占比数据异常，无人自助场景，小程序渗透高于50%","9384_screen_remark":"全场满25-10元；","3252_screen_remark":"切换API投放中（品牌回复慢）","10597_screen_remark":"按本周内完成所有优化工作推进","12126_screen_remark":"全场满10-5元","11519_screen_remark":"整单8折","16577_screen_remark":"波动存活","3252_screen_price":"商家无法提供，计划下线","3252_screen_biz":"不接受代金券，计划下线","18525_screen_remark":"按本周内完成所有优化工作推进：4.8已沟通品牌未回复","9992_screen_remark":"整单8.8折","8914_screen_remark":"整单75折，近期未存活，周内沟通新增0元券或低价单品券","5048_screen_remark":"1.诺杯鲜奶茶系列5折券\n2.诺杯东方茉莉中杯7.9元券","7072_screen_remark":"全场满15-2元","8440_screen_biz":"会员占比超过50%","5660_screen_remark":"按本周内完成所有优化工作推进","18540_screen_remark":"整单86折","2248_screen_remark":"按本周内完成所有优化工作推进","18541_screen_biz":"会员占比超过50%","18243_screen_biz":"会员占比超过50%","2908_screen_biz":"会员占比超过50%","12175_screen_infra":"经营规模小，1店<10笔合理","15441_screen_infra":"经营规模小，1店<10笔合理","2070_screen_biz":"代金券投放中","12175_screen_biz":"沟通确认中","16553_screen_infra":"沟通确认中","15390_screen_biz":"沟通确认中","18696_screen_biz":"沟通确认中","13297_screen_biz":"会员占比超过50%","11601_screen_biz":"会员占比超过50%","2250_screen_biz":"会员占比超过50%","11461_screen_biz":"沟通确认中","18703_screen_price":"全场券","18383_screen_infra":"沟通确认中","19194_screen_biz":"沟通确认中","18703_screen_biz":"沟通确认中","18383_screen_biz":"沟通确认中","18570_screen_biz":"沟通确认中","13388_screen_biz":"沟通确认中","16576_screen_biz":"沟通确认中","11211_screen_biz":"沟通确认中","4801_screen_biz":"会员占比超过50%","11532_screen_biz":"沟通确认中","18907_screen_biz":"沟通确认中","18713_screen_biz":"沟通确认中","18802_screen_biz":"沟通确认中","18224_screen_biz":"沟通确认中","18323_screen_biz":"沟通确认中","18171_screen_biz":"沟通确认中","18492_screen_biz":"沟通确认中","13610_screen_biz":"会员占比超过50%","19193_screen_infra":"沟通确认中","18918_screen_price":"全场券","18360_screen_price":"全场券","10947_screen_price":"全场券","10668_screen_remark":"切换API投放中（品牌回复慢）","7865_screen_remark":"1.全场满15-3元券\n2.全场8折券","6827_screen_remark":"全场单杯68折","8184_screen_remark":"整单75折","3743_screen_remark":"全场单杯75折","5173_screen_remark":"整单88折","1565_screen_remark":"波动存活","11519_screen_infra":"沟通确认中","10668_screen_infra":"沟通确认中","18525_screen_infra":"沟通确认中","13297_screen_price":"全场券","5048_screen_infra":"沟通确认中","8573_screen_infra":"沟通确认中","8184_screen_infra":"沟通确认中","6827_screen_infra":"沟通确认中","7192_screen_price":"全场券","17380_screen_price":"全场券","17550_screen_price":"全场券","9536_screen_price":"全场券","18352_screen_remark":"存活商户，1店4核","18352_screen_biz":"会员占比超过50%","16553_screen_biz":"沟通确认中","16453_screen_biz":"沟通确认中","5660_screen_infra":"沟通确认中","8069_screen_price":"沟通确认中","3688_screen_infra":"沟通确认中","7333_screen_infra":"沟通确认中","17263_screen_infra":"沟通确认中","18279_screen_biz":"沟通确认中","2248_screen_infra":"沟通确认中","3688_screen_biz":"沟通确认中","17263_screen_biz":"沟通确认中","16585_screen_biz":"沟通确认中","18715_screen_price":"商家无法提供，计划下线","2813_screen_infra":"沟通确认中","17282_screen_infra":"沟通确认中","5269_screen_infra":"沟通确认中","16577_screen_biz":"会员占比超过50%","10668_screen_biz":"会员占比超过50%","18525_screen_biz":"沟通确认中","7865_screen_biz":"会员占比超过50%","7072_screen_biz":"会员占比超过50%","8573_screen_biz":"会员占比超过50%","5660_screen_biz":"会员占比超过50%","3743_screen_biz":"会员占比超过50%","12126_screen_biz":"会员占比超过50%","16594_screen_biz":"会员占比超过50%","2908_screen_remark":"波动存活","1565_screen_biz":"会员占比超过50%","1575_screen_biz":"会员占比超过50%"};
async function loadFeedback(){
  _fbLoaded=true;if(typeof renderScreen==='function')renderScreen();
  const{data}=await supa.from('brand_feedback').select('*').order('updated_at',{ascending:false});
  if(data)data.forEach(r=>{const k=r.brand_id+'_'+r.field_name;_fbCache[k]=r.field_value});
}
async function saveFeedback(brandId,brandName,field,value){
  _fbCache[brandId+'_'+field]=value;
  try{
    await supa.from('brand_feedback').delete().eq('brand_id',String(brandId)).eq('field_name',field);
    if(value){
      await supa.from('brand_feedback').insert({brand_id:String(brandId),brand_name:brandName,field_name:field,field_value:value});
    }
    // 保存成功提示
    const t=document.getElementById('toast');if(t){t.textContent='✅ 已保存';t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1500);}
  }catch(e){alert('saveFeedback exception: '+e.message)}
}

// ── 置顶品牌反馈时间线 (pin_feedback 表) ──
window._pinFeedbackCache = {}; // { brandId: [{id, brand_id, brand_name, content, author, created_at}] }

async function _pinLoadFeedback() {
  try {
    const { data, error } = await supa.from('pin_feedback').select('*').order('created_at', { ascending: false });
    if (error) throw error;
    window._pinFeedbackCache = {};
    (data || []).forEach(f => {
      if (!window._pinFeedbackCache[f.brand_id]) window._pinFeedbackCache[f.brand_id] = [];
      window._pinFeedbackCache[f.brand_id].push(f);
    });
  } catch(e) { console.warn('[pinFeedback] 加载失败:', e.message); }
}

async function _pinAddFb(brandId, brandName) {
  const input = document.getElementById('pinFbInput_' + brandId);
  if (!input) return;
  const content = input.value.trim();
  if (!content) return;
  try {
    const { data, error } = await supa.from('pin_feedback').insert({ brand_id: brandId, brand_name: brandName, content: content, author: '' }).select().single();
    if (error) throw error;
    if (!window._pinFeedbackCache[brandId]) window._pinFeedbackCache[brandId] = [];
    window._pinFeedbackCache[brandId].unshift(data);
    input.value = '';
    rpinc(); // 刷新卡片
    const t=document.getElementById('toast');if(t){t.textContent='✅ 反馈已添加';t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1500);}
  } catch(e) { alert('添加反馈失败: ' + e.message); }
}

async function _pinEditFb(fbId) {
  // 找到这条反馈
  let found = null;
  for (const arr of Object.values(window._pinFeedbackCache)) {
    found = arr.find(f => f.id === fbId);
    if (found) break;
  }
  if (!found) return;
  const newContent = prompt('编辑反馈:', found.content);
  if (newContent === null || newContent.trim() === found.content) return;
  try {
    const { error } = await supa.from('pin_feedback').update({ content: newContent.trim(), updated_at: new Date().toISOString() }).eq('id', fbId);
    if (error) throw error;
    found.content = newContent.trim();
    rpinc();
    const t=document.getElementById('toast');if(t){t.textContent='✅ 已修改';t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1500);}
  } catch(e) { alert('编辑失败: ' + e.message); }
}

async function _pinDeleteFb(fbId, brandId) {
  if (!confirm('确认删除这条反馈？')) return;
  try {
    const { error } = await supa.from('pin_feedback').delete().eq('id', fbId);
    if (error) throw error;
    const arr = window._pinFeedbackCache[brandId];
    if (arr) window._pinFeedbackCache[brandId] = arr.filter(f => f.id !== fbId);
    rpinc();
    const t=document.getElementById('toast');if(t){t.textContent='✅ 已删除';t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1500);}
  } catch(e) { alert('删除失败: ' + e.message); }
}

let _fbLoaded=false;
loadFeedback().then(()=>{_fbLoaded=true;try{rbt()}catch(e){};try{if(window.renderScreen)renderScreen()}catch(e){};setTimeout(autoResizeAll,200)});
_pinLoadFeedback(); // 预加载置顶反馈时间线

// textarea自动撑高
function autoResize(el){el.style.height='auto';el.style.height=el.scrollHeight+'px'}
function autoResizeAll(){document.querySelectorAll('textarea.rm').forEach(el=>{if(el.value)autoResize(el)})}
document.addEventListener('input',e=>{if(e.target.matches('textarea.rm'))autoResize(e.target)});
document.addEventListener('focus',e=>{if(e.target.matches('textarea.rm'))autoResize(e.target)},true);



function _P(v){return v==null?'—':(typeof v==='number'?v.toFixed(1):v)+'%'}
async function loadDashboardData(targetDate) {
  const headers = {'apikey': SUPA_KEY, 'Authorization': 'Bearer ' + SUPA_KEY};

  async function fetchJSON(table, params) {
    const url = SUPA_URL + '/rest/v1/' + table + '?' + params + '&limit=1000';
    const resp = await fetch(url, {headers});
    return resp.json();
  }

  async function fetchAllParallel(table, params, pageSize) {
    pageSize = pageSize || 1000;
    const countResp = await fetch(
      SUPA_URL + '/rest/v1/' + table + '?' + params + '&limit=1',
      {headers: {...headers, 'Prefer': 'count=exact', 'Range': '0-0'}}
    );
    const cr = countResp.headers.get('Content-Range') || '';
    const total = parseInt(cr.split('/')[1]) || 0;
    if (total === 0) return [];
    const pages = Math.ceil(total / pageSize);
    const promises = [];
    for (let i = 0; i < pages; i++) {
      const u = SUPA_URL + '/rest/v1/' + table + '?' + params + '&limit=' + pageSize + '&offset=' + (i * pageSize);
      promises.push(fetch(u, {headers}).then(r => r.json()));
    }
    return (await Promise.all(promises)).flat();
  }

  if (!targetDate) {
    const dates = await fetchJSON('brand_snapshot', 'select=data_date&order=data_date.desc&limit=1');
    if (!dates.length) throw new Error('brand_snapshot 中无数据');
    targetDate = dates[0].data_date;
  }

  const trendStart = (function(){const d=new Date(targetDate);d.setDate(d.getDate()-34);return d.toISOString().substring(0,10);})();
  const [snapshots, channels, spInfos, sopRows, topRecords, trendRows] = await Promise.all([
    fetchJSON('brand_snapshot', 'data_date=eq.' + targetDate + '&select=*'),
    fetchJSON('brand_channel', 'data_date=eq.' + targetDate + '&select=*'),
    fetchJSON('sp_info', 'select=*'),
    fetchJSON('sop_snapshot', 'data_date=eq.' + targetDate + '&select=*'),
    fetchJSON('brand_top_records', 'select=*').catch(()=>[]),
    // 近 35 天精简字段（滚动 7 天窗口 + 上期对比）- 用分页避免 1000 上限
    fetchAllParallel('brand_snapshot', 'select=data_date,brand_id,tier,sub_category,online_today,is_alive,hi_exp_uv_all,lo_exp_uv_all,visit_use_rate,daily_tx&data_date=gte.' + trendStart + '&data_date=lte.' + targetDate + '&order=data_date.asc').catch(()=>[]),
  ]);

  const spSummary = {};
  spInfos.forEach(s => {
    spSummary[s.sp_name] = {name: s.sp_name, type: s.sp_type, owner: s.owner, target: s.target, brands: s.brands || []};
  });

  const brands = snapshots.map(s => {
    const hiApp=s.hi_app_uv_e21||0, loApp=s.lo_app_uv_e21||0, hiExp=s.hi_exp_uv_e21||0, loExp=s.lo_exp_uv_e21||0;
    const hiAppAll=s.hi_app_uv_all||0, loAppAll=s.lo_app_uv_all||0, hiExpAll=s.hi_exp_uv_all||0, loExpAll=s.lo_exp_uv_all||0;
    const e21AppUV7d=hiApp+loApp, totalExpUV=hiExp+loExp, dailyExpUV=totalExpUV/7;
    const bizUse=s.biz_use_d||0, f2fUse=s.f2f_use_d||0, fixUse=s.fix_use_d||0;
    const e21UseDly=bizUse+f2fUse+fixUse, allUseDly=s.use_pv||0, otherUseDly=Math.max(0,allUseDly-e21UseDly);
    const bizExp=s.biz_exp_w||0, f2fExp=s.f2f_exp_w||0, fixExp=s.fix_exp_w||0, e21ExpW=bizExp+f2fExp+fixExp;
    const sc=s.store_count||0, dTx=s.daily_tx, dTxAbs=(dTx||0)*10000, expPv=s.exp_pv;
    return {
      name:s.brand_name, brandId:s.brand_id, sp:s.sp_name||'', spMapped:s.sp_name||'',
      statusManual:s.status||'', tierManual:s.tier_human||s.tier||'', tierDaily:s.tier||'', dailyTierRaw:s.daily_tier_raw||'',
      assistant:s.assistant||'', owner:s.owner||'', couponSP:s.coupon_sp||'',
      hasDailyData:s.daily_tx!=null, cat2:s.category||'', cat4:s.sub_category||'',
      displayLevel:s.display_level||'other',
      survivalRate:s.survival_rate, isAlive:s.is_alive, onlineToday:s.online_today, priceForce:s.price_force,
      miniApp:s.mini_app, txPerStore:s.tx_per_store, storeComplete:s.store_complete,
      storeCount:s.store_count, visitUseRate:s.visit_use_rate, claimVisitRate:s.claim_visit_rate, e21Ratio:s.e21_ratio,
      expPv:s.exp_pv, claimPv:s.claim_pv, usePv:s.use_pv, dailyTx:s.daily_tx,
      expClaimRate:s.exp_claim_rate, claimUseRate:s.claim_use_rate, expUseRate:s.exp_use_rate,
      bizOk:s.factor_biz, priceOk:s.factor_price, infraOk:s.factor_infra, trafficOk:s.factor_store,
      biz_expW:s.biz_exp_w, biz_useD:s.biz_use_d, f2f_expW:s.f2f_exp_w, f2f_useD:s.f2f_use_d,
      fix_expW:s.fix_exp_w, fix_useD:s.fix_use_d, nb_expW:s.nb_exp_w, nb_useD:s.nb_use_d,
      zfyl_expW:s.zfyl_exp_w, zfyl_useD:s.zfyl_use_d,
      hiAppUV:hiApp, loAppUV:loApp, hiExpUV:hiExp, loExpUV:loExp,
      hiAppUV_all:hiAppAll, loAppUV_all:loAppAll, hiExpUV_all:hiExpAll, loExpUV_all:loExpAll,
      hiRate_uv:hiApp>0?hiExp/hiApp:0, loRate_uv:loApp>0?loExp/loApp:0,
      hiRate_pv:s.hi_rate_e21!=null?s.hi_rate_e21/100:null,
      loRate_pv:s.lo_rate_e21!=null?s.lo_rate_e21/100:null,
      e21AppUV_7d:e21AppUV7d, allAppUV_7d:hiAppAll+loAppAll, allExpUV_7d:hiExpAll+loExpAll,
      totalAppUV:e21AppUV7d, totalExpUV:totalExpUV, dailyExpUV:dailyExpUV,
      e21_use_daily:e21UseDly, all_use_daily:allUseDly, other_use_daily:otherUseDly,
      custAppRate:e21AppUV7d>0&&dTxAbs>0?Math.round(e21AppUV7d/7/dTxAbs*10000)/10000:0,
      custTxRatio:dTxAbs>0?Math.round((e21AppUV7d/7)/dTxAbs*10000)/100:0,
      expPerStore:sc>0&&e21ExpW>0?Math.round(e21ExpW*10000/sc*100)/100:null,
      e21EUR_daily:dailyExpUV>0?e21UseDly/dailyExpUV:null,
      e21EUR:dailyExpUV>0?Math.round((e21UseDly/dailyExpUV)*10000)/100:null,
      e21ExpRatio:expPv>0?Math.round(e21ExpW/expPv*10000)/100:null,
      custAppPerStore:sc>0?Math.round(e21AppUV7d/7/sc*100)/100:null,
      dailyTx_precise:dTx,
      daily_cat2:s.category||'', daily_tier:s.tier||'',
      daily_online_days:s.online_days, daily_online:s.online_days!=null&&s.online_days>0,
      statusDaily:s.online_days!=null&&s.online_days>0?'在线':'在线待确认',
      onlineStatus:s.online_days!=null&&s.online_days>0?'在线':'在线待确认',
      _dr:s,
    };
  });

  const bc = channels.map(c => ({
    name:c.brand_name, brandId:c.brand_id, cat4:c.cat4||'', sp:c.sp||'', tier:c.tier||'',
    alive:c.is_alive||false, dailyTx:c.daily_tx,
    dExpW:c.d_exp_w, dClaimW:c.d_claim_w, dUse:c.d_use,
    expClaimR:c.exp_claim_r, claimUseR:c.claim_use_r, expUseR:c.exp_use_r,
    e21ExpW:c.e21_exp_w, e21Use:c.e21_use, e21EUR:c.e21_eur,
    nbExpW:c.nb_exp_w, nbUse:c.nb_use, nbEUR:c.nb_eur,
    payExpW:c.pay_exp_w, payUse:c.pay_use, payEUR:c.pay_eur,
    hiR:c.hi_r, loR:c.lo_r,
  }));

  function mapAct(a) {
    return {
      brandName:a.brand_name, activityId:a.activity_id, activityName:a.activity_name,
      couponName:a.coupon_name, couponDetail:a.coupon_detail||'', discountType:a.discount_type||'',
      threshold:a.threshold, amount:a.amount, onlineDays:a.online_days,
      priceForce:a.price_force, thresholdJudge:a.threshold_judge||'',
      thresholdVal:a.threshold_val, brandAvgPrice:a.brand_avg_price,
      expPV:a.exp_pv, claimPV:a.claim_pv, usePV:a.use_pv,
      expUV:a.exp_uv, claimUV:a.claim_uv, useUV:a.use_uv,
      dailyExpPV:a.daily_exp_pv, expClaimRate:a.exp_claim_rate,
      claimUseRate:a.claim_use_rate, expUseRate:a.exp_use_rate, dailyUsePV:a.daily_use_pv,
      isSP:a.is_sp||'', spName:a.sp_name||'', expValid:a.exp_valid||'',
      useValid:a.use_valid||'', tier:a.tier||'',
      dailyExpOls:a.daily_exp_pv_ols, dailyUseOls:a.daily_use_pv_ols,
      hiAppRate:a.hi_app_rate, loAppRate:a.lo_app_rate,
      visitUseRate:a.visit_use_rate,
      claimVisitRate:a.claim_visit_rate,
      noThresholdRate:a.no_threshold_rate,
      afterExpClaim:null, afterClaimVisit:null,
      visitNoThreshold:null, visit7dNoThreshold:null, visit7dThreshold:null,
      visitUseAvgPrice:null, visitNoUseAvgPrice:null, visit7dUse:null, visit7dNoUse:null,
    };
  }

  const sop = sopRows.length > 0 ? sopRows[0].sop_data : {};
  // 防御：如果 sop_snapshot 当日无数据或字段缺失，补空对象避免前端崩溃
  if (!sop.alive_stats) sop.alive_stats = {};
  if (!sop.dead_stats) sop.dead_stats = {};
  if (!sop.factors_v4) sop.factors_v4 = {};
  if (!sop.cust_pool) sop.cust_pool = {};
  if (!sop.quadrant) sop.quadrant = {};
  if (!sop.screen_brands) sop.screen_brands = [];
  if (!sop.appendix) sop.appendix = {};
  if (sop.waist_total == null) sop.waist_total = 0;
  if (sop.waist_online == null) sop.waist_online = 0;
  if (sop.waist_lost == null) sop.waist_lost = 0;

  const D = {
    final: {dataDate:targetDate, totalTarget:800, spSummary:spSummary, brands:brands},
    sop: sop, bc: bc, acts: [], _actsLoaded: false,
    topRecords: topRecords || [],
    trendRows: trendRows || [],
    loadActivities: async function() {
      if (this._actsLoaded) return this.acts;
      const raw = await fetchAllParallel('activity_detail', 'select=*');
      this.acts = raw.map(mapAct);
      this._actsLoaded = true;
      return this.acts;
    },
  };
  return D;
}

var F,BS,SPS,SOP,BC,ACTS,W,KA,actByBrand={};

function V(v,s){if(v==null)return'—';return v+(s||'')}
function Nw(v){if(v==null)return'—';return v>=1000?(v/1000).toFixed(0)+'k':v<0.01&&v>0?v.toFixed(3):v.toFixed(1)}
function N(v){if(!v&&v!==0)return'—';if(Math.abs(v)>=10000)return(v/10000).toFixed(1)+'万';if(Math.abs(v)>=1000)return(v/1000).toFixed(1)+'k';return Math.round(v)}
function WOW(v){if(v==null)return'—';return'<span class="'+(v>=0?'up':'dn')+'">'+(v>0?'+':'')+v+'%</span>'}
function P(v){if(v==null)return'—';return(v*100).toFixed(1)+'%'}
function Pct(n,d){if(!n||!d||d===0)return'—';return(n/d*100).toFixed(1)+'%'}
function quadDetail(id){const el=document.getElementById(id);if(el)el.style.display=el.style.display==='none'?'block':'none'}

function rsop(){
  const _setById=(id,html)=>{var el=document.getElementById(id);if(el)el.innerHTML=html;};
  const onl=W.filter(b=>b.statusManual==='在线'),lost=W.filter(b=>b.statusManual==='流失'),alv=onl.filter(b=>b.isAlive===true);
  const sr=onl.length?(alv.length/onl.length*100).toFixed(1):'0';
  const prog=(W.length/F.totalTarget*100).toFixed(1);
  const srProg=Math.min(parseFloat(sr)/50*100,100).toFixed(0);
  (document.getElementById('sopTgt')||{innerHTML:''}).innerHTML=`
    <div class="kc cb"><div class="kl">引入目标</div><div class="kv">${F.totalTarget}</div><div class="ks">腰部商户</div></div>
    <div class="kc cb"><div class="kl">已投放</div><div class="kv">${SOP.waist_total}</div><div class="ks">腰部 · 在线${SOP.waist_online}+流失${SOP.waist_lost}</div><div class="pb"><div class="pf pf-b" style="width:${Math.min(prog,100)}%"></div></div><div class="pt">${prog}%</div></div>
    <div class="kc cb"><div class="kl">在线</div><div class="kv">${onl.length}</div><div class="ks">腰部商户</div></div>
    <div class="kc cg"><div class="kl">存活</div><div class="kv">${alv.length}</div><div class="ks">腰部 · ${onl.length}个在线中</div></div>
    <div class="kc ${parseFloat(sr)>=50?'cg':'cr'}"><div class="kl">存活率</div><div class="kv">${sr}%</div><div class="ks">腰部 · 目标≥50%</div><div class="pb"><div class="pf ${parseFloat(sr)>=50?'pf-g':'pf-o'}" style="width:${srProg}%"></div></div><div class="pt">${srProg}%达标进度</div></div>
    <div class="kc co"><div class="kl">总品牌(含KA+尾部)</div><div class="kv" style="font-size:16px">${BS.length}</div><div class="ks">KA${KA.length} 腰部${W.length} 其他${BS.length-KA.length-W.length}</div></div>`;

  // 动态填充区块标题
  const _fv4=SOP.factors_v4||{}, _cp=SOP.cust_pool||{}, _q=SOP.quadrant||{};
  var _hfc=document.getElementById('hdrFactorsCnt');if(_hfc)_hfc.textContent=(_fv4.total||'—')+'个在线腰部餐饮品牌';
  var _hcp=document.getElementById('hdrCustPoolCnt');if(_hcp)_hcp.textContent='← 可保留（全达标+人工打标）未存活的'+(_cp.total||'—')+'个品牌';
  var _hq=document.getElementById('hdrQuadrantCnt');if(_hq)_hq.textContent='← 老客池子充足的'+(_q.total||'—')+'个品牌';

  // SOP timeline（不变）
  document.getElementById('sopCard').innerHTML=`<div class="sop-timeline">
    <div class="sop-node"><div class="sop-dot dot-b">1</div>
      <h3>上线前 · 检查四要素</h3>
      <div class="sn-sub">上线前完成引入质量把控，通过四要素的品牌上线直接参加置顶策略。若不符合四要素、需报备批准后上线。</div>
      <div class="sop-factors">
        <div class="sf-card"><h5>🏪 经营模式 <span style="font-size:9px;font-weight:400;background:var(--g1);color:var(--g);padding:1px 5px;border-radius:3px;margin-left:4px">行业</span></h5><div class="sf-std">小程序渗透率 ≥ <span class="sv">50%</span><br>或 会员交易占比 ≥ <span class="sv">50%</span></div></div>
        <div class="sf-card"><h5>💰 货盘价格力 <span style="font-size:9px;font-weight:400;background:var(--g1);color:var(--g);padding:1px 5px;border-radius:3px;margin-left:4px">行业</span></h5><div class="sf-std">价格力 ≥ <span class="sv">0</span><br>（不贵于抖音/美团竞品）</div></div>
        <div class="sf-card"><h5>🏗️ 基建-商户号 <span style="font-size:9px;font-weight:400;background:var(--g1);color:var(--g);padding:1px 5px;border-radius:3px;margin-left:4px">行业</span></h5><div class="sf-std">1店几笔 ≥ <span class="sv">10</span><br>（确认经营规模和商户号绑定）</div></div>
        <div class="sf-card"><h5>🏪 基建-门店 <span style="font-size:9px;font-weight:400;background:var(--g1);color:var(--g);padding:1px 5px;border-radius:3px;margin-left:4px">行业</span></h5><div class="sf-std">门店完整度 ≥ <span class="sv">90%</span><br>（审核通过门店数 / 美抖真实门店数）</div></div>
      </div>
    </div>
    <div class="sop-node"><div class="sop-dot dot-g">2</div>
      <h3>上线后 · 关注三项指标</h3>
      <div class="sn-sub">四要素具备的品牌上线后，动态监测以下三项指标，及时排查异常</div>
      <div class="sop-factors">
        <div class="sf-card"><h5>📊 存活率 <span style="font-size:9px;font-weight:400;background:var(--b1);color:var(--b);padding:1px 5px;border-radius:3px;margin-left:4px">公线</span><span style="font-size:9px;font-weight:400;background:var(--g1);color:var(--g);padding:1px 5px;border-radius:3px;margin-left:4px">行业</span></h5><div class="sf-std">日均全渠道核销PV / 日均交易笔数 ≥ <span class="sv">1%</span><br><span style="color:var(--x4);font-size:10px">存活率 ≥ 1% 即为存活</span></div></div>
        <div class="sf-card"><h5>📡 老客流量 <span style="font-size:9px;font-weight:400;background:var(--b1);color:var(--b);padding:1px 5px;border-radius:3px;margin-left:4px">公线</span></h5><div class="sf-std">日均(高频+低频)尽曝PV / 日均交易笔数 ≥ <span class="sv">1</span><br><span style="color:var(--x4);font-size:10px">老客流量充分度 = 1:1</span></div></div>
        <div class="sf-card"><h5>🏪 到店核销率 <span style="font-size:9px;font-weight:400;background:var(--g1);color:var(--g);padding:1px 5px;border-radius:3px;margin-left:4px">行业</span></h5><div class="sf-std">到店核销率 ≥ 腰部中位数 <span class="sv">${((()=>{const a=(BS||[]).filter(b=>b.tierManual==='腰部'&&b.onlineToday===true&&b.visitUseRate!=null).map(b=>b.visitUseRate).sort((x,y)=>x-y);if(!a.length)return '—';const m=Math.floor(a.length/2);return (a.length%2?a[m]:(a[m-1]+a[m])/2).toFixed(1)})())}%</span><br><span style="color:var(--x4);font-size:10px">按日报动态计算（筛腰部在线）</span></div></div>
      </div>
    </div>
  </div>`;

  // === 四要素待排查商户清单（保留原逻辑，仅注入到 #fcScrHost）===
  const S=SOP;
  const fv4=S.factors_v4||{};
  (document.getElementById('fcScrHost')||{innerHTML:''}).innerHTML=`
    <details style="background:#fff;border:1px solid #e5e7eb;border-radius:8px;padding:14px">
      <summary style="cursor:pointer;list-style:none">
        <div style="display:flex;align-items:center;gap:10px">
          <div style="font-size:13px;font-weight:700;color:#1e293b">📋 商户反馈明细 <span style="font-size:11px;color:#94a3b8;font-weight:400;margin-left:4px">（<span id="scrHdrCnt">—</span> 个 · 口径 腰部×餐饮×日报在线）· 点击展开 ▾</span></div>
        </div>
      </summary>
      <div style="margin-top:12px">
        <div class="fb"><span class="fl">筛选</span>
          <select id="scrSP" onchange="renderScreen()"><option value="">服务商</option></select>
          <select id="scrOwner" onchange="renderScreen()"><option value="">负责人</option></select>
          <select id="scrAsst" onchange="renderScreen()"><option value="">助理</option></select>
          <select id="scrIssue" onchange="renderScreen()"><option value="">待排查问题</option><option value="经营模式">经营模式</option><option value="货盘">货盘</option><option value="基建-商户号">基建-商户号</option><option value="基建-门店">基建-门店</option></select>
          <input id="scrQ" type="text" placeholder="搜索品牌" oninput="renderScreen()" style="width:100px">
        </div>
      </div>
      <div class="tw" style="max-height:600px;overflow:auto;position:relative;margin-top:8px"><table id="scrTbl" class="an-tbl" style="font-size:13px"><thead style="position:sticky;top:0;z-index:2;background:#fff"><tr>
        <th style="text-align:left;position:sticky;left:0;z-index:3;background:#f8fafc">品牌</th><th>品牌ID</th><th>服务商</th><th>负责人</th><th>助理</th><th>业态</th><th>存活</th>
        <th class="nc">门店数</th><th class="nc">日均交易</th><th class="nc">1店几笔</th><th class="nc">小程序占比</th><th class="nc">价格力</th><th class="nc">门店完整度</th><th>待排查问题</th>
        <th style="background:#b45852;color:#fff;min-width:130px">经营模式反馈</th>
        <th style="background:#b49252;color:#fff;min-width:130px">货盘反馈</th>
        <th style="background:#5a8aad;color:#fff;min-width:130px">基建-商户号反馈</th>
        <th style="background:#6366f1;color:#fff;min-width:130px">基建-门店反馈</th>
        <th style="min-width:140px">0406反馈</th>
        <th style="min-width:160px;background:#7c3aed;color:#fff">0407-0410反馈</th>
        <th style="min-width:160px;background:#0d9488;color:#fff">0412-0417反馈</th>
      </tr></thead><tbody></tbody></table></div>
      <div id="scrCnt" style="font-size:10px;color:var(--x4);margin-top:3px"></div>
      <div id="scrMissing" style="font-size:11px;color:#d97706;margin-top:6px;padding:6px 10px;background:#fef3c7;border-radius:6px;display:none"></div>
    </details>`;

  // 继续原 rsop 以下渲染（SCR 填充 + 监听等）——保留原逻辑
  // === 四要素扫描 ===
  function fCard(cat,metricDesc,n,total,color,followUp){
    const w=total?(n/total*100).toFixed(0):0;
    return`<div style="background:#fff;border-radius:10px;box-shadow:var(--s);overflow:hidden">
      <div style="padding:6px 18px 5px;background:${color};color:#fff;font-size:13px;font-weight:700;letter-spacing:0.5px">${cat}</div>
      <div style="padding:18px 18px 0">
        <div style="font-size:12px;color:var(--x6);margin-bottom:8px">${metricDesc}</div>
        <div style="display:flex;align-items:baseline;gap:8px;margin:8px 0">
          <span style="font-size:34px;font-weight:800;color:${color}">${n}</span>
          <span style="font-size:12px;color:var(--x5)">/ ${total}（${w}%）</span>
        </div>
        <div class="bar-track" style="height:10px;margin-bottom:14px"><div class="bar-fill" style="width:${w}%;background:${color};min-width:${n>0?'10px':'0'}"></div></div>
      </div>
      <div style="padding:10px 18px 14px;background:var(--x0);border-top:1px solid var(--x2);font-size:11px;color:var(--x6);line-height:1.6">🔧 后续跟进：${followUp}</div>
    </div>`}

  // 四要素排查清单渲染
  // SCR 不再依赖 sop_snapshot.screen_brands，改为从 BS 实时计算
  const SCR=(function(){
    const result=[];
    (BS||[]).forEach(b=>{
      if(b.tierManual!=='腰部')return;
      if(b.statusManual!=='在线')return;
      if(b.onlineToday!==true)return;
      const issues=[];
      if(b.bizOk===false) issues.push('经营模式');
      if(b.priceOk===false) issues.push('货盘');
      if(b.infraOk===false) issues.push('基建-商户号');
      if(b.trafficOk===false) issues.push('基建-门店');
      if(!issues.length)return;
      result.push({
        brandId:b.brandId, name:b.name, sp:b.spMapped||'', owner:b.owner||'',
        assistant:b.assistant||'', cat4:b.cat4||'', isAlive:b.isAlive,
        storeCount:b.storeCount, dailyTx:b.dailyTx, txPerStore:b.txPerStore,
        miniApp:b.miniApp, priceForce:b.priceForce, storeComplete:b.storeComplete,
        issues:issues
      });
    });
    return result;
  })();
  // 填筛选下拉
  const scrSPs=[...new Set(SCR.map(b=>b.sp))].sort();
  const scrOwners=[...new Set(SCR.map(b=>b.owner).filter(Boolean))].sort();
  const scrAssts=[...new Set(SCR.map(b=>b.assistant).filter(Boolean))].sort();
  scrSPs.forEach(v=>{var e=document.getElementById('scrSP');if(e)e.innerHTML+=`<option value="${v}">${v}</option>`});
  scrOwners.forEach(v=>{var e=document.getElementById('scrOwner');if(e)e.innerHTML+=`<option value="${v}">${v}</option>`});
  scrAssts.forEach(v=>{var e=document.getElementById('scrAsst');if(e)e.innerHTML+=`<option value="${v}">${v}</option>`});

  const _scrFbOpts={
    '经营模式':['会员占比超过50%','代金券投放中','准备切代金券投放','不接受代金券，计划下线','沟通确认后希望在线','沟通确认中','已沟通，未回复','已沟通，整改中'],
    '货盘':['全场券','已更新更优货盘，价格力更新延迟','商家无法提供，计划下线','沟通确认中','已沟通，未回复','已沟通，整改中'],
    '基建':['经营规模小，1店<10笔合理','总部拿不到商户号，待沟通pos商或门店给420单号方案','商家无法获取，计划下线','沟通确认中','基建沟通中','已沟通，未回复','已沟通，整改中'],
    '门店':['公线真实门店不准需修正','服务商仅覆盖部分门店，已全部上传','已整改，待内部确认','商家无法上传，计划下线','沟通确认中','已沟通，未回复','已沟通，整改中']
  };
  function scrSelect(brandId,brandName,issueType,fieldKey){
    const cur=_fbCache[brandId+'_'+fieldKey]||'';
    const opts=_scrFbOpts[issueType]||[];
    let html='<select style="font-size:12px;padding:3px 5px;border:1px solid var(--x3);border-radius:3px;width:130px" onchange="scrFbChange(this,\''+brandId+'\',\''+brandName.replace(/'/g,"\\'")+'\',\''+fieldKey+'\')">';
    html+='<option value="">请选择</option>';
    opts.forEach(o=>{html+=`<option value="${o}" ${cur===o?'selected':''}>${o}</option>`});
    html+='</select>';
    return html;
  }
  function scrFbChange(el,brandId,brandName,fieldKey){
    saveFeedback(brandId,brandName,fieldKey,el.value);
    try{localStorage.setItem('scr_'+brandId+'_'+fieldKey,el.value)}catch(e){}
    flashSaved(el);
  }
  function scrRemarkChange(el,brandId,brandName){
    saveFeedback(brandId,brandName,'screen_remark',el.value);
    try{localStorage.setItem('scr_'+brandId+'_screen_remark',el.value)}catch(e){}
    flashSaved(el);
  }
  function scrFb0410Change(el,brandId,brandName){
    saveFeedback(brandId,brandName,'screen_fb0410',el.value);
    try{localStorage.setItem('scr_'+brandId+'_screen_fb0410',el.value)}catch(e){}
    flashSaved(el);
  }
  function scrFb0417Change(el,brandId,brandName){
    saveFeedback(brandId,brandName,'screen_fb0417',el.value);
    try{localStorage.setItem('scr_'+brandId+'_screen_fb0417',el.value)}catch(e){}
    flashSaved(el);
  }
  function flashSaved(el){
    el.style.borderColor='#059669';el.style.boxShadow='0 0 0 2px #d1fae5';
    setTimeout(()=>{el.style.borderColor='';el.style.boxShadow=''},1200);
  }
  window.scrFbChange=scrFbChange;
  window.scrRemarkChange=scrRemarkChange;
  window.scrFb0410Change=scrFb0410Change;
  window.scrFb0417Change=scrFb0417Change;

  function renderScreen(){
    const fSP=document.getElementById('scrSP').value;
    const fOwner=document.getElementById('scrOwner').value;
    const fAsst=document.getElementById('scrAsst').value;
    const fIssue=document.getElementById('scrIssue').value;
    const fQ=(document.getElementById('scrQ').value||'').toLowerCase();
    // 对齐 Tab 0 / A-1 口径: tierManual=腰部 ∩ 餐饮 ∩ 日报 online_today=true
    // screen_brands 本身 tierManual/online_today 为空, 从 BS 按 brandId 补
    const _bsMap={};(BS||[]).forEach(function(x){if(x&&x.brandId!=null)_bsMap[String(x.brandId)]=x;});
    let fl=SCR.filter(b=>{
      // 不再筛 cat4 (和 Tab0 一致, 只信跟进表)
      const bs=_bsMap[String(b.brandId)];
      if(!bs)return false;
      if(bs.tierManual!=='腰部')return false;
      if(bs.onlineToday!==true)return false;
      if(fSP&&b.sp!==fSP)return false;
      if(fOwner&&b.owner!==fOwner)return false;
      if(fAsst&&b.assistant!==fAsst)return false;
      if(fIssue&&!b.issues.includes(fIssue))return false;
      if(fQ&&!b.name.toLowerCase().includes(fQ)&&!(b.brandId||'').includes(fQ))return false;
      return true;
    });
    const tb=document.querySelector('#scrTbl tbody');
    tb.innerHTML='';
    fl.forEach(b=>{
      const issues=b.issues.map(i=>{
        const colors={'经营模式':'#b45852','货盘':'#b49252','基建-商户号':'#5a8aad','基建-门店':'#6366f1'};
        return`<span style="display:inline-block;font-size:9px;font-weight:600;padding:1px 5px;border-radius:3px;background:${colors[i]}20;color:${colors[i]};margin:1px 2px">${i}</span>`;
      }).join('');
      // 其他反馈从缓存恢复
      const remarkVal=_fbCache[b.brandId+'_screen_remark']||(()=>{try{return localStorage.getItem('scr_'+b.brandId+'_screen_remark')||''}catch(e){return''}})();
      const fb0410Val=_fbCache[b.brandId+'_screen_fb0410']||(()=>{try{return localStorage.getItem('scr_'+b.brandId+'_screen_fb0410')||''}catch(e){return''}})();
      const fb0417Val=_fbCache[b.brandId+'_screen_fb0417']||(()=>{try{return localStorage.getItem('scr_'+b.brandId+'_screen_fb0417')||''}catch(e){return''}})();

      tb.innerHTML+=`<tr>
        <td style="text-align:left;font-weight:600;position:sticky;left:0;z-index:1;background:#fff">${b.name}</td>
        <td>${b.brandId||'—'}</td><td>${b.sp}</td><td>${b.owner||'—'}</td><td>${b.assistant||'—'}</td><td>${b.cat4}</td>
        <td>${b.isAlive===true?'<span class="bd b-ok">存活</span>':(b.isAlive===false?'<span class="bd b-d">未存活</span>':'—')}</td>
        <td class="nc">${b.storeCount!=null?b.storeCount:'—'}</td>
        <td class="nc">${b.dailyTx?b.dailyTx.toLocaleString():'—'}</td>
        <td class="nc">${b.txPerStore!=null?b.txPerStore:'—'}</td>
        <td class="nc">${b.miniApp!=null?_P(b.miniApp):'—'}</td>
        <td class="nc">${b.priceForce!=null?(b.priceForce>0?'+':'')+_P(b.priceForce).replace('—',''):'—'}</td>
        <td class="nc" style="color:${b.storeComplete!=null&&b.storeComplete<90?'var(--r)':'inherit'};font-weight:${b.storeComplete!=null&&b.storeComplete<90?'700':'400'}">${b.storeComplete!=null?_P(b.storeComplete):'—'}</td>
        <td>${issues}</td>
        <td>${b.issues.includes('经营模式')?scrSelect(b.brandId,b.name,'经营模式','screen_biz'):''}</td>
        <td>${b.issues.includes('货盘')?scrSelect(b.brandId,b.name,'货盘','screen_price'):''}</td>
        <td>${b.issues.includes('基建-商户号')?scrSelect(b.brandId,b.name,'基建','screen_infra'):''}</td>
        <td>${b.issues.includes('基建-门店')?scrSelect(b.brandId,b.name,'门店','screen_store'):''}</td>
        <td><textarea class="rm" style="min-width:140px;font-size:12px;padding:4px 6px" placeholder="..." onblur="scrRemarkChange(this,'${b.brandId}','${b.name.replace(/'/g,"\\'")}')" onkeydown="if(event.key==='Enter'){event.preventDefault();scrRemarkChange(this,'${b.brandId}','${b.name.replace(/'/g,"\\'")}');this.blur()}" onclick="event.stopPropagation()">${remarkVal}</textarea></td>
        <td><textarea class="rm" style="min-width:160px;font-size:12px;padding:4px 6px" placeholder="0407-0410反馈..." onblur="scrFb0410Change(this,'${b.brandId}','${b.name.replace(/'/g,"\\'")}')" onkeydown="if(event.key==='Enter'){event.preventDefault();scrFb0410Change(this,'${b.brandId}','${b.name.replace(/'/g,"\\'")}');this.blur()}" onclick="event.stopPropagation()">${fb0410Val}</textarea></td>
        <td><textarea class="rm" style="min-width:160px;font-size:12px;padding:4px 6px" placeholder="0412-0417反馈..." onblur="scrFb0417Change(this,'${b.brandId}','${b.name.replace(/'/g,"\\'")}')" onkeydown="if(event.key==='Enter'){event.preventDefault();scrFb0417Change(this,'${b.brandId}','${b.name.replace(/'/g,"\\'")}');this.blur()}" onclick="event.stopPropagation()">${fb0417Val}</textarea></td>
      </tr>`;
    });
    document.getElementById('scrCnt').textContent=fl.length+'/'+SCR.length+' 品牌';
    var _sh=document.getElementById('scrHdrCnt');if(_sh)_sh.textContent=fl.length;
    // 数据缺失商户备注：口径内(腰部×跟进在线×日报在线) 但四要素任一为 null & 不在 scr_filtered 里的
    var _missing=(BS||[]).filter(function(b){
      if(b.tierManual!=='腰部')return false;
      if(b.onlineToday!==true)return false;
      var hasNull=(b.bizOk===null||b.priceOk===null||b.infraOk===null||b.trafficOk===null||
                   b.bizOk===undefined||b.priceOk===undefined||b.infraOk===undefined||b.trafficOk===undefined);
      if(!hasNull)return false;
      return true;
    });
    // 再加"系统漏判"：有 false 但未进 SCR 的
    var _scrBids=new Set(fl.map(function(x){return String(x.brandId)}));
    var _allScrBids=new Set((SCR||[]).map(function(x){return String(x.brandId)}));
    var _gap=(BS||[]).filter(function(b){
      if(b.tierManual!=='腰部')return false;
      if(b.onlineToday!==true)return false;
      if(b.bizOk===true && b.priceOk===true && b.infraOk===true && b.trafficOk===true)return false; // 达标的不算
      if(_allScrBids.has(String(b.brandId)))return false; // 已在 SCR 里的不算（无论是否被过滤）
      if(b.bizOk===null||b.priceOk===null||b.infraOk===null||b.trafficOk===null)return false; // 已纳入 missing
      return true;
    });
    var _total=_missing.length+_gap.length;
    var _sm=document.getElementById('scrMissing');
    if(_sm){
      if(_total>0){
        _sm.style.display='block';
        _sm.innerHTML='⚠️ <b>'+_total+' 个数据缺失商户</b> 待底表更新：'+
          _missing.concat(_gap).slice(0,10).map(function(b){return b.name}).join(' · ')+
          (_total>10?' 等':'');
      }else{
        _sm.style.display='none';
      }
    }
    // 反馈汇总
    if(_fbLoaded){
      const bizC={},priceC={},infraC={};
      const bizBrands=SCR.filter(b=>b.issues.includes('经营模式'));
      const priceBrands=SCR.filter(b=>b.issues.includes('货盘'));
      const infraBrands=SCR.filter(b=>b.issues.includes('基建-商户号'));
      const storeBrands=SCR.filter(b=>b.issues.includes('基建-门店'));
      function countFb(brands,field){
        const c={};
        brands.forEach(b=>{
          const v=(_fbCache[b.brandId+'_'+field]||'').trim();
          const rm=(_fbCache[b.brandId+'_screen_remark']||'').trim();
          const label=v||('(未填'+(rm?'，备注: '+rm:'')+')');
          c[label]=(c[label]||0)+1;
        });
        return Object.entries(c).sort((a,b)=>b[1]-a[1]);
      }
      const bizFb=countFb(bizBrands,'screen_biz');
      const priceFb=countFb(priceBrands,'screen_price');
      const infraFb=countFb(infraBrands,'screen_infra');
      const storeFb=countFb(storeBrands,'screen_store');
      // 决策分类
      let keepN=0,offN=0,talkN=0,otherN=0;
      const keepList=[],offList=[],otherList=[];
      SCR.forEach(b=>{
        const biz=(_fbCache[b.brandId+'_screen_biz']||'').trim();
        const price=(_fbCache[b.brandId+'_screen_price']||'').trim();
        const infra=(_fbCache[b.brandId+'_screen_infra']||'').trim();
        const store=(_fbCache[b.brandId+'_screen_store']||'').trim();
        const rm=(_fbCache[b.brandId+'_screen_remark']||'').trim();
        if(biz.includes('计划下线')||price.includes('计划下线')||infra.includes('计划下线')||store.includes('计划下线')||rm.includes('下线')){offN++;offList.push(b.name)}
        else if(biz==='会员占比>=50%'||biz==='准备切代金券投放'||price==='全场券'||infra.includes('经营规模小')||store==='公线真实门店不准，实际>=90%'||store==='服务商仅覆盖部分门店，已全部上传'||rm.includes('经营规模')||(rm.includes('存活')&&!rm.includes('未存活'))){keepN++;keepList.push(b.name)}
        else if(biz==='沟通确认中'||biz==='沟通确认后希望在线'||price==='沟通确认中'||infra==='沟通确认中'||store==='沟通确认中')talkN++;
        else{otherN++;otherList.push({name:b.name,rm:rm})}
      });
      function fbRows(items){return items.map(([k,v])=>`<tr><td style="padding:3px 8px">${k}</td><td style="padding:3px 8px" class="nc"><b>${v}</b></td></tr>`).join('')}
      (document.getElementById('scrFbSummary')||{innerHTML:''}).innerHTML=`<details>
        <summary style="cursor:pointer;font-size:12px;font-weight:600;color:var(--x6);margin-bottom:6px">📊 初步反馈汇总 ▾</summary>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:14px">
          <div style="background:#fff;border-radius:8px;box-shadow:var(--s);padding:14px">
            <div style="font-size:12px;font-weight:700;color:#b45852;margin-bottom:8px">经营模式（${bizBrands.length}个品牌）</div>
            <table style="width:100%;font-size:11px">${fbRows(bizFb)}</table>
          </div>
          <div style="background:#fff;border-radius:8px;box-shadow:var(--s);padding:14px">
            <div style="font-size:12px;font-weight:700;color:#b49252;margin-bottom:8px">货盘（${priceBrands.length}个品牌）</div>
            <table style="width:100%;font-size:11px">${fbRows(priceFb)}</table>
          </div>
          <div style="background:#fff;border-radius:8px;box-shadow:var(--s);padding:14px">
            <div style="font-size:12px;font-weight:700;color:#5a8aad;margin-bottom:8px">基建-商户号（${infraBrands.length}个品牌）</div>
            <table style="width:100%;font-size:11px">${fbRows(infraFb)}</table>
          </div>
          <div style="background:#fff;border-radius:8px;box-shadow:var(--s);padding:14px">
            <div style="font-size:12px;font-weight:700;color:#6366f1;margin-bottom:8px">基建-门店（${storeBrands.length}个品牌）</div>
            <table style="width:100%;font-size:11px">${fbRows(storeFb)}</table>
          </div>
        </div>
        <div style="background:#fff;border-radius:8px;box-shadow:var(--s);padding:14px">
          <div style="font-size:12px;font-weight:700;color:var(--x7);margin-bottom:8px">综合决策分类</div>
          <table style="width:100%;font-size:11px;border-collapse:collapse">
            <thead><tr style="background:var(--x0)"><th style="padding:6px 8px;text-align:left;font-weight:600">决策</th><th style="padding:6px 8px;text-align:right;font-weight:600;width:50px">数量</th><th style="padding:6px 8px;text-align:left;font-weight:600">说明</th></tr></thead>
            <tbody>
              <tr><td style="padding:5px 8px;font-weight:600;color:var(--g)">可保留</td><td style="padding:5px 8px;text-align:right;font-weight:700">${keepN}</td><td style="padding:5px 8px;color:var(--x6)">会员占比高/全场券合理/经营规模小/实际存活 → 四要素"不达标"有合理解释</td></tr>
              <tr style="background:var(--x0)"><td style="padding:5px 8px;font-weight:600;color:#dc2626">计划下线</td><td style="padding:5px 8px;text-align:right;font-weight:700">${offN}</td><td style="padding:5px 8px;color:var(--x6)">${offList.join('、')}</td></tr>
              <tr><td style="padding:5px 8px;font-weight:600;color:var(--o)">沟通确认中</td><td style="padding:5px 8px;text-align:right;font-weight:700">${talkN}</td><td style="padding:5px 8px;color:var(--x6)">最大头，需要本周推进落实</td></tr>
              ${otherN?'<tr style="background:var(--x0)"><td style="padding:5px 8px;font-weight:600;color:var(--x4)">未明确</td><td style="padding:5px 8px;text-align:right;font-weight:700">'+otherN+'</td><td style="padding:5px 8px;color:var(--x6)">'+otherList.map(o=>o.name+(o.rm?' ('+o.rm+')':'')).join('、')+'</td></tr>':''}
            </tbody>
          </table>
        </div>
      </details>`;
    }
    // === 跟进进展（实时从_fbCache计算）===
    if(_fbLoaded||Object.keys(_fbCache).length>0){
      const _keepReasons={'会员占比超过50%':'经营模式','沟通确认后希望在线':'经营模式','准备切代金券投放':'经营模式','代金券投放中':'经营模式','全场券':'货盘','已沟通，整改中':'货盘','经营规模小，1店<10笔合理':'基建-商户号','已沟通，整改中':'基建-商户号','公线真实门店不准需修正':'基建-门店','服务商仅覆盖部分门店，已全部上传':'基建-门店'};
      const _offlineKw=['计划下线','不接受代金券','商家无法提供','商家无法获取','商家无法上传'];
      const _progressKw=['沟通确认中','已沟通，整改中','已沟通，未回复','基建沟通中'];
      const _keepVals=new Set(['会员占比超过50%','沟通确认后希望在线','准备切代金券投放','代金券投放中','全场券','经营规模小，1店<10笔合理','公线真实门店不准需修正','服务商仅覆盖部分门店，已全部上传']);
      
      const keepMap={},offMap={},progMap={};
      const otherList=[];
      let keepN=0,offN=0,progN=0,otherN=0;
      
      SCR.forEach(b=>{
        const bid=b.brandId;
        const biz=(_fbCache[bid+'_screen_biz']||'').trim();
        const price=(_fbCache[bid+'_screen_price']||'').trim();
        const infra=(_fbCache[bid+'_screen_infra']||'').trim();
        const store=(_fbCache[bid+'_screen_store']||'').trim();
        const rm=(_fbCache[bid+'_screen_remark']||'').trim();
        const fb0410=(_fbCache[bid+'_screen_fb0410']||'').trim();
        const allFb=[biz,price,infra,store];
        const allTxt=[biz,price,infra,store,rm,fb0410].join(' ');
        
        // 优先判定：计划下线
        if(_offlineKw.some(kw=>allTxt.includes(kw))||allTxt.includes('下线')){
          offN++;
          const reasons=[];
          if(biz&&biz.includes('计划下线'))reasons.push('经营模式: '+biz);
          if(price&&price.includes('计划下线'))reasons.push('货盘: '+price);
          if(infra&&infra.includes('计划下线'))reasons.push('基建: '+infra);
          if(store&&store.includes('计划下线'))reasons.push('门店: '+store);
          if(!reasons.length)reasons.push(rm||fb0410||'备注含下线');
          const rk=reasons[0];
          if(!offMap[rk])offMap[rk]=[];
          offMap[rk].push(b);
          return;
        }
        // 可保留
        const keepFbs=[];
        if(_keepVals.has(biz))keepFbs.push('经营模式: '+biz);
        if(_keepVals.has(price))keepFbs.push('货盘: '+price);
        if(_keepVals.has(infra))keepFbs.push('基建-商户号: '+infra);
        if(_keepVals.has(store))keepFbs.push('基建-门店: '+store);
        if(rm&&(rm.includes('经营规模')||rm.includes('存活')))keepFbs.push('备注: '+rm);
        if(keepFbs.length>0){
          keepN++;
          keepFbs.forEach(r=>{if(!keepMap[r])keepMap[r]=[];keepMap[r].push(b)});
          return;
        }
        // 跟进中
        const progFbs=[];
        if(_progressKw.includes(biz))progFbs.push('经营模式: '+biz);
        if(_progressKw.includes(price))progFbs.push('货盘: '+price);
        if(_progressKw.includes(infra))progFbs.push('基建-商户号: '+infra);
        if(_progressKw.includes(store))progFbs.push('基建-门店: '+store);
        if(progFbs.length>0){
          progN++;
          progFbs.forEach(r=>{if(!progMap[r])progMap[r]=[];progMap[r].push(b)});
          return;
        }
        // 未分类
        otherN++;
        otherList.push(b);
      });
      
      // 跟进进展 - 实时从_fbCache计算
      const _keepRules={'经营模式':{'screen_biz':['会员占比超过50%','沟通确认后希望在线','准备切代金券投放','代金券投放中']},'货盘':{'screen_price':['全场券','已更新更优货盘，价格力更新延迟']},'基建-商户号':{'screen_infra':['经营规模小，1店<10笔合理']},'基建-门店':{'screen_store':['公线真实门店不准需修正','服务商仅覆盖部分门店，已全部上传','已整改，待内部确认']}};
      const _offRules={'经营模式':{'screen_biz':['不接受代金券，计划下线']},'货盘':{'screen_price':['商家无法提供，计划下线']},'基建-商户号':{'screen_infra':['商家无法获取，计划下线']},'基建-门店':{'screen_store':['商家无法上传，计划下线']}};
      const _progRules={'经营模式':{'screen_biz':['沟通确认中','已沟通，整改中','已沟通，未回复']},'货盘':{'screen_price':['沟通确认中','已沟通，整改中','已沟通，未回复']},'基建-商户号':{'screen_infra':['沟通确认中','基建沟通中','已沟通，整改中','已沟通，未回复','总部拿不到商户号，待沟通pos商或门店给420单号方案']},'基建-门店':{'screen_store':['沟通确认中','已沟通，整改中','已沟通，未回复']}};
      function classifyBrand(b){
        const bid=b.brandId,vals={};
        ['screen_biz','screen_price','screen_infra','screen_store','screen_remark','screen_fb0410','screen_fb0417'].forEach(k=>vals[k]=(_fbCache[bid+'_'+k]||'').trim());
        // 只有下拉选项精确匹配 _offRules 才算 offline，备注里的关键词不算
        const issueMap={'screen_biz':'经营模式','screen_price':'货盘','screen_infra':'基建-商户号','screen_store':'基建-门店'};
        const details={};let hasAnyIssue=false;
        for(const fk of ['screen_biz','screen_price','screen_infra','screen_store']){
          const issue=issueMap[fk];if(!(b.issues||[]).includes(issue))continue;hasAnyIssue=true;
          const fv=vals[fk];if(!fv){details[issue]='nofb';continue}
          let cls='progress';
          for(const rules of Object.values(_offRules)){if(rules[fk]&&rules[fk].includes(fv))cls='offline'}
          if(cls!=='offline'){for(const rules of Object.values(_keepRules)){if(rules[fk]&&rules[fk].includes(fv))cls='keep'}}
          if(cls!=='offline'&&cls!=='keep'){
            let isProgKw=false;for(const rules of Object.values(_progRules)){if(rules[fk]&&rules[fk].includes(fv))isProgKw=true}
            if(isProgKw)cls='progress';
            else if(_keepVals&&_keepVals.has&&_keepVals.has(fv))cls='keep';
          }
          details[issue]=cls;
        }
        if(vals.screen_remark&&(vals.screen_remark.includes('存活')||vals.screen_remark.includes('经营规模'))){
          for(const iss of Object.keys(details)){if(details[iss]==='nofb')details[iss]='keep'}
        }
        if(!hasAnyIssue)return{brand:'nofb',details:{}};
        const vals2=Object.values(details);let brand='keep';
        if(vals2.includes('offline'))brand='offline';
        else if(vals2.includes('nofb'))brand='nofb';
        else if(vals2.includes('progress'))brand='progress';
        return{brand,details};
      }
      const keepB=[],offB=[],progB=[],nofbB=[];const brandDetails={};
      SCR.forEach(b=>{const r=classifyBrand(b);brandDetails[b.brandId]=r.details;if(r.brand==='keep')keepB.push(b);else if(r.brand==='offline')offB.push(b);else if(r.brand==='nofb')nofbB.push(b);else progB.push(b)});
      
      const _ic={'经营模式':'#c07064','货盘':'#c09e64','基建-商户号':'#6a9ab8','基建-门店':'#7c7ef0'};
      function spGrp(bs){const m={};bs.forEach(b=>{const s=b.sp||'未知';if(!m[s])m[s]=[];m[s].push(b)});return Object.entries(m).sort((a,b)=>b[1].length-a[1].length).map(([s,arr])=>`<b>${s}</b>(${arr.length}) ${arr.map(x=>x.name).join('、')}`).join('<br>')}
      function issueCards(rules,brands,accent){
        let h='<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px;margin-top:8px">';
        for(const[issue,ro]of Object.entries(rules)){
          const fk=Object.keys(ro)[0],vals=ro[fk];
          const matched=[];brands.forEach(b=>{const v=(_fbCache[b.brandId+'_'+fk]||'').trim();if(vals.includes(v))matched.push({b,v})});
          if(!matched.length)continue;
          const ic=_ic[issue]||accent;
          const byR={};matched.forEach(({b,v})=>{if(!byR[v])byR[v]=[];byR[v].push(b)});
          h+=`<div style="background:var(--x0);border-radius:6px;padding:8px 10px;border-left:3px solid ${ic}">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
              <span style="font-size:10px;font-weight:600;color:${ic}">${issue}</span>
              <span style="font-size:16px;font-weight:800;color:${ic}">${matched.length}</span>
            </div>`;
          for(const[reason,bs]of Object.entries(byR).sort((a,b)=>b[1].length-a[1].length)){
            h+=`<details><summary style="cursor:pointer;font-size:10px;color:var(--x5);padding:1px 0">${reason} · ${bs.length}</summary>
              <div style="font-size:9px;color:var(--x5);padding:2px 0 4px 6px;line-height:1.6">${spGrp(bs)}</div></details>`;
          }
          h+=`</div>`;
        }
        h+=`</div>`;
        return h;
      }
      function pCard(emoji,title,count,color,contentHtml,footTxt){
        const pct=(SCR.length?(count/SCR.length*100).toFixed(0):0);
        return`<div style="background:#fff;border-radius:10px;box-shadow:0 1px 3px rgba(0,0,0,.06);overflow:hidden">
          <div style="padding:5px 14px 4px;background:${color};color:#fff;font-size:11px;font-weight:600;letter-spacing:.3px">${emoji} ${title}</div>
          <div style="padding:12px 14px 6px">
            <div style="display:flex;align-items:baseline;gap:6px">
              <span style="font-size:26px;font-weight:800;color:${color}">${count}</span>
              <span style="font-size:10px;color:var(--x5)">/ ${SCR.length} (${pct}%)</span>
            </div>
            ${contentHtml}
          </div>
          <div style="padding:6px 14px 8px;background:#fafafa;border-top:1px solid var(--x1);font-size:9px;color:var(--x5)">${footTxt}</div>
        </div>`;
      }
      
      // === 矩阵渲染 + 跟进明细 ===
      const _scrLen=(S.screen_brands||[]).length;
      // 问题维度统计：不管品牌最终分类，只看该要素的反馈是否匹配规则
      function _issueKeepCount(issue){return SCR.filter(b=>{const d=brandDetails[b.brandId]||{};return d[issue]==='keep'}).length}
      function _issueProgCount(issue){return SCR.filter(b=>{const d=brandDetails[b.brandId]||{};return d[issue]==='progress'||d[issue]==='nofb'}).length}
      function _spGrp(bs){const m={};bs.forEach(b=>{const s=b.sp||'未知';if(!m[s])m[s]=[];m[s].push(b)});return Object.entries(m).sort((a,b)=>b[1].length-a[1].length)}
      // 普通Tab面板（待跟进用）
      function _buildSpList(groups,accentColor){
        let h='';
        if(!groups.length){h+='<div style="font-size:12px;color:#94a3b8;padding:8px 0">暂无数据</div>'}
        groups.forEach(([sp,arr])=>{
          h+='<div style="border-bottom:1px solid #f1f5f9;padding:8px 0"><div style="font-size:13px;font-weight:600;color:#475569;display:flex;align-items:center;gap:6px"><span style="width:6px;height:6px;border-radius:50%;background:'+accentColor+';display:inline-block"></span>'+sp+' <span style="font-size:11px;color:#94a3b8;font-weight:400">('+arr.length+')</span></div>';
          h+='<div style="padding-left:20px;display:flex;flex-wrap:wrap;gap:4px 16px">';
          arr.forEach(b=>{h+='<span style="font-size:12px;color:#64748b;padding:2px 0">'+b.name+'</span>'});
          h+='</div></div>';
        });
        return h;
      }
      // 通用详情面板：一级tab=四要素，二级tab=原始下拉值分组
      function _buildDetailPanel(prefix,tabs,filterFn,countFn,accentColor,borderColor,bgColor){
        bgColor=bgColor||'#fff';
        const _fkMap={'经营模式':'screen_biz','货盘':'screen_price','基建-商户号':'screen_infra','基建-门店':'screen_store'};
        let h='<div style="display:flex;gap:0;border-bottom:1px solid '+borderColor+';background:'+bgColor+'">';
        tabs.forEach((iss,i)=>{const n=countFn(iss);h+='<div onclick="document.querySelectorAll(\'.'+(prefix)+'p\').forEach(p=>p.style.display=\'none\');document.getElementById(\''+(prefix)+i+'\').style.display=\'block\';document.querySelectorAll(\'.'+(prefix)+'t\').forEach(t=>{t.style.borderBottomColor=\'transparent\';t.style.fontWeight=\'400\';t.style.color=\'#64748b\'});this.style.borderBottomColor=\''+accentColor+'\';this.style.fontWeight=\'600\';this.style.color=\''+accentColor+'\'" class="'+(prefix)+'t" style="flex:1;padding:10px 12px;text-align:center;font-size:12px;color:'+(i===0?accentColor:'#64748b')+';cursor:pointer;border-bottom:2px solid '+(i===0?accentColor:'transparent')+';font-weight:'+(i===0?'600':'400')+'">'+iss+'<span style="font-weight:700;font-size:14px;display:block;margin-top:2px">'+n+'</span></div>'});
        h+='</div>';
        tabs.forEach((iss,i)=>{
          const fk=_fkMap[iss];
          const matched=filterFn(iss);
          // 按原始下拉值分组
          const byVal={};matched.forEach(b=>{const v=(_fbCache[b.brandId+'_'+fk]||'').trim()||'(未填写)';if(!byVal[v])byVal[v]=[];byVal[v].push(b)});
          const groups=Object.entries(byVal).sort((a,b)=>b[1].length-a[1].length);
          h+='<div id="'+(prefix)+i+'" class="'+(prefix)+'p" style="display:'+(i===0?'block':'none')+';background:'+bgColor+'">';
          if(!groups.length){h+='<div style="font-size:12px;color:#94a3b8;padding:12px 20px">暂无数据</div>'}
          else{
            const subPfx=prefix+'s'+i+'_';
            h+='<div style="display:flex;flex-wrap:wrap;gap:0;border-bottom:1px solid '+borderColor+';background:'+bgColor+';padding:0 8px">';
            groups.forEach(([val,bs],j)=>{h+='<div onclick="document.querySelectorAll(\'.'+(subPfx)+'p\').forEach(p=>p.style.display=\'none\');document.getElementById(\''+(subPfx)+j+'\').style.display=\'block\';document.querySelectorAll(\'.'+(subPfx)+'t\').forEach(t=>{t.style.borderBottomColor=\'transparent\';t.style.fontWeight=\'400\';t.style.color=\'#94a3b8\'});this.style.borderBottomColor=\''+accentColor+'\';this.style.fontWeight=\'500\';this.style.color=\''+accentColor+'\'" class="'+(subPfx)+'t" style="padding:8px 12px;font-size:11px;color:'+(j===0?accentColor:'#94a3b8')+';cursor:pointer;border-bottom:2px solid '+(j===0?accentColor:'transparent')+';font-weight:'+(j===0?'500':'400')+';white-space:nowrap">'+val+' <b>'+bs.length+'</b></div>'});
            h+='</div>';
            groups.forEach(([val,bs],j)=>{
              const spGroups=_spGrp(bs);
              h+='<div id="'+(subPfx)+j+'" class="'+(subPfx)+'p" style="display:'+(j===0?'block':'none')+';padding:12px 20px;max-height:260px;overflow-y:auto">';
              h+=_buildSpList(spGroups,accentColor);
              h+='</div>';
            });
          }
          h+='</div>';
        });
        return h;
      }
      const mEl=document.getElementById('sopMatrix');
      if(mEl){
        const dims=[{name:'经营模式',low:fv4.mini_low,std:'小程序占比<50%'},{name:'货盘',low:fv4.price_low,std:'价格力<0'},{name:'基建-商户号',low:fv4.txps_low,std:'1店几笔<10'},{name:'基建-门店',low:fv4.store_low,std:'门店完整度<90%'}];
        const _fkMap={'经营模式':'screen_biz','货盘':'screen_price','基建-商户号':'screen_infra','基建-门店':'screen_store'};
        const _factors=['经营模式','货盘','基建-商户号','基建-门店'];
        let mH='<div style="background:#fff;border-radius:16px;box-shadow:0 2px 12px rgba(0,0,0,.06);padding:20px;overflow-x:auto">';
        mH+='<div style="display:grid;grid-template-columns:110px repeat(4,1fr) 1.2fr;gap:0"><div></div><div style="grid-column:2/6;text-align:center;font-size:11px;color:#dc2626;font-weight:600;padding:6px 0">⚠️ 不达标维度</div><div style="text-align:center;font-size:11px;color:#059669;font-weight:600;padding:6px 0">✅ 达标汇总</div></div>';
        mH+='<div style="display:grid;grid-template-columns:110px repeat(4,1fr) 1.2fr;gap:0">';
        mH+='<div style="padding:14px 8px;border-bottom:2px solid #e2e8f0"></div>';
        dims.forEach(d=>{mH+='<div style="padding:14px 8px;text-align:center;font-size:13px;font-weight:600;color:#dc2626;background:#fef2f2;border-bottom:2px solid #e2e8f0">'+d.name+'<div style="font-size:10px;color:#94a3b8;font-weight:400;margin-top:2px">'+d.std+'</div></div>'});
        mH+='<div style="padding:14px 8px;text-align:center;font-size:13px;font-weight:600;color:#059669;background:#ecfdf5;border-bottom:2px solid #e2e8f0;border-radius:0 8px 0 0">全达标<div style="font-size:10px;color:#94a3b8;font-weight:400;margin-top:2px">四要素全部合格</div></div>';
        mH+='<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:16px 10px;font-size:13px;font-weight:600;border-right:2px solid #e2e8f0;min-height:90px;background:#f8fafc;color:#475569"><span style="font-size:18px">📋</span>系统统计</div>';
        dims.forEach(d=>{mH+='<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:14px 8px;min-height:90px;border-bottom:1px solid #f1f5f9;border-right:1px solid #f1f5f9"><div style="font-size:28px;font-weight:700;color:#dc2626">'+d.low+'</div><div style="font-size:11px;color:#94a3b8;margin-top:4px">不达标</div></div>'});
        mH+='<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:14px 8px;min-height:90px;background:#f8fafc;border-left:2px solid #e2e8f0;border-bottom:1px solid #f1f5f9"><div style="font-size:28px;font-weight:700;color:#475569">'+fv4.all_pass+'</div><div style="font-size:11px;color:#94a3b8;margin-top:4px">占比 '+(fv4.valid?Math.round(fv4.all_pass/fv4.valid*100):0)+'%</div></div>';
        mH+='<div style="grid-column:1/-1;display:flex;align-items:center;justify-content:center;padding:2px 0;color:#cbd5e1;font-size:14px;gap:6px"><span>⬇</span><span>⬇</span><span>⬇</span><span>⬇</span><span>⬇</span></div>';
        const humanPass=keepB.length;const effectivePass=fv4.all_pass+humanPass;
        mH+='<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:16px 10px;font-size:13px;font-weight:600;border-right:2px solid #e2e8f0;min-height:90px;background:#f0fdf4;color:#059669"><span style="font-size:18px">✅</span>可保留<span style="font-size:10px;color:#6ee7b7;font-weight:400">人工打标</span></div>';
        dims.forEach(d=>{const kn=_issueKeepCount(d.name);mH+='<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:14px 8px;min-height:90px;border-bottom:1px solid #a7f3d0;border-right:1px solid #a7f3d0;background:#ecfdf5"><div style="font-size:28px;font-weight:700;color:#059669">'+kn+'</div><div style="font-size:11px;color:#94a3b8;margin-top:4px">可保留</div></div>'});
        mH+='<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:14px 8px;min-height:90px;background:#ecfdf5;border-left:2px solid #e2e8f0;border-bottom:1px solid #f1f5f9"><div style="font-size:28px;font-weight:700;color:#059669">'+effectivePass+'</div><div style="font-size:11px;color:#94a3b8;margin-top:4px">占比 '+(fv4.valid?Math.round(effectivePass/fv4.valid*100):0)+'%</div><div style="font-size:10px;font-weight:600;margin-top:4px;padding:2px 8px;border-radius:10px;background:#dcfce7;color:#16a34a">系统'+fv4.all_pass+' + 人工'+humanPass+'</div></div>';
        mH+='</div>';
        // 可保留折叠（二级原因Tab）
        if(keepB.length){
          mH+='<div style="background:#ecfdf5;border:1px solid #a7f3d0;border-radius:0 0 12px 12px;overflow:hidden;margin-top:-1px">';
          mH+='<div onclick="var p=this.nextElementSibling;p.style.display=p.style.display===\'none\'?\'block\':\'none\';this.querySelector(\'.ke-arrow\').textContent=p.style.display===\'none\'?\'▸ 展开\':\'▾ 收起\'" style="display:flex;align-items:center;justify-content:space-between;padding:10px 20px;cursor:pointer;border-bottom:1px solid #a7f3d0" onmouseover="this.style.background=\'#d1fae5\'" onmouseout="this.style.background=\'transparent\'">';
          mH+='<div style="font-size:13px;font-weight:600;color:#065f46">✅ 展开查看可保留详情</div>';
          mH+='<div class="ke-arrow" style="font-size:12px;color:#94a3b8">▸ 展开</div></div>';
          mH+='<div style="display:none">';
          mH+=_buildDetailPanel('kp',_factors,iss=>SCR.filter(b=>{const d=brandDetails[b.brandId]||{};return d[iss]==='keep'}),_issueKeepCount,'#059669','#a7f3d0','#ecfdf5');
          mH+='</div></div>';
        }
        mH+='<div style="display:flex;align-items:center;justify-content:center;padding:4px 0;color:#cbd5e1;font-size:14px;gap:6px;margin:4px 0"><span>⬇</span><span>⬇</span><span>⬇</span><span>⬇</span><span>⬇</span></div>';
        // Row 3
        mH+='<div style="display:grid;grid-template-columns:110px repeat(4,1fr) 1.2fr;gap:0">';
        const followAll=progB.length+nofbB.length;
        mH+='<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:16px 10px;font-size:13px;font-weight:600;border-right:2px solid #e2e8f0;min-height:90px;background:#fffbeb;color:#d97706"><span style="font-size:18px">🔄</span>继续跟进</div>';
        dims.forEach(d=>{const pn=_issueProgCount(d.name);mH+='<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:14px 8px;min-height:90px;border-bottom:1px solid #f1f5f9;border-right:1px solid #f1f5f9;background:#fffbeb"><div style="font-size:28px;font-weight:700;color:#d97706">'+pn+'</div><div style="font-size:11px;color:#94a3b8;margin-top:4px">待跟进</div></div>'});
        mH+='<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:14px 8px;min-height:90px;background:#fffbeb;border-left:2px solid #e2e8f0;border-bottom:1px solid #f1f5f9"><div style="font-size:28px;font-weight:700;color:#d97706">'+followAll+'</div><div style="font-size:11px;color:#94a3b8;margin-top:4px">品牌待跟进</div></div>';
        mH+='</div>';
        // 待跟进折叠
        const followBrands=progB.concat(nofbB);
        mH+='<div style="background:#fffbeb;border:1px solid #fde68a;border-radius:0 0 12px 12px;overflow:hidden;margin-top:-1px">';
        mH+='<div onclick="var p=this.nextElementSibling;p.style.display=p.style.display===\'none\'?\'block\':\'none\';this.querySelector(\'.fe-arrow\').textContent=p.style.display===\'none\'?\'▸ 展开\':\'▾ 收起\'" style="display:flex;align-items:center;justify-content:space-between;padding:10px 20px;cursor:pointer;border-bottom:1px solid #fde68a" onmouseover="this.style.background=\'#fef3c7\'" onmouseout="this.style.background=\'transparent\'">';
        mH+='<div style="font-size:13px;font-weight:600;color:#92400e">🔍 展开查看待跟进详情</div>';
        mH+='<div class="fe-arrow" style="font-size:12px;color:#94a3b8">▸ 展开</div></div>';
        mH+='<div style="display:none">';
        mH+=_buildDetailPanel('fp',_factors,iss=>SCR.filter(b=>{const d=brandDetails[b.brandId]||{};return d[iss]==='progress'||d[iss]==='nofb'}),_issueProgCount,'#d97706','#fde68a','#fffbeb');
        mH+='</div></div>';
        // 计划下线（最后）
        if(offB.length){
          function _issueOffCount(issue){return SCR.filter(b=>{const d=brandDetails[b.brandId]||{};return d[issue]==='offline'}).length}
          mH+='<div style="background:#fef2f2;border:1px solid #fecaca;border-radius:8px;margin-top:12px;overflow:hidden">';
          mH+='<div onclick="var p=this.nextElementSibling;p.style.display=p.style.display===\'none\'?\'block\':\'none\';this.querySelector(\'.of-arrow\').textContent=p.style.display===\'none\'?\'▸ 展开\':\'▾ 收起\'" style="display:flex;align-items:center;justify-content:space-between;padding:10px 20px;cursor:pointer;border-bottom:1px solid #fecaca" onmouseover="this.style.background=\'#fee2e2\'" onmouseout="this.style.background=\'transparent\'">';
          mH+='<div style="font-size:13px;font-weight:600;color:#dc2626;display:flex;align-items:center;gap:8px">❌ 计划下线（不配合整改）<span style="font-size:12px;font-weight:400;color:#94a3b8">'+offB.length+' 个品牌</span></div>';
          mH+='<div class="of-arrow" style="font-size:12px;color:#94a3b8">▸ 展开</div></div>';
          mH+='<div style="display:none">';
          mH+=_buildDetailPanel('of',_factors,iss=>SCR.filter(b=>{const d=brandDetails[b.brandId]||{};return d[iss]==='offline'}),_issueOffCount,'#dc2626','#fecaca','#fef2f2');
          mH+='</div></div>';
        }
        mH+='</div>';
        // 统计口径说明
        mH+='<div style="margin-top:12px;padding:10px 16px;background:#f8fafc;border-radius:8px;font-size:11px;color:#64748b;line-height:1.8">';
        mH+='<span style="font-weight:600;color:#475569">📌 统计口径说明：</span>';
        mH+='不达标维度按<b>问题维度</b>统计，同一品牌可能有多个不达标要素，因此各列之和 ≥ 不达标品牌总数；';
        mH+='达标汇总按<b>品牌维度</b>统计，四要素均达标（含人工确认）的品牌才计入。';
        mH+='</div>';
        mEl.innerHTML=mH;
      }
      (document.getElementById('scrFunnel')||{innerHTML:''}).innerHTML='';
    }
    setTimeout(autoResizeAll,50);
  }
  window.renderScreen=renderScreen;
  // 先渲染一次，feedback加载完后再刷
  renderScreen();
  if(_fbLoaded)setTimeout(()=>renderScreen(),100);

  // === 老客基数排查 ===
  const CP=S.cust_pool||{};
  let cpFailRows='';
  (CP.fail_brands||[]).forEach(b=>{
    cpFailRows+=`<tr><td>${b.name}</td><td>${b.brandId||'—'}</td><td>${b.sp}</td><td>${b.cat4}</td><td class="nc">${b.audit_stores!=null?Math.round(b.audit_stores):'—'}</td><td class="nc">${b.daily_tx?b.daily_tx.toLocaleString():'—'}</td><td class="nc">${b.txPerStore!=null?b.txPerStore:'—'}</td><td class="nc">${b.e21AppUV?b.e21AppUV.toLocaleString():'—'}</td></tr>`});

  // 池子充足品牌明细
  let cpOkRows='';
  let sumDtx=0,sumApp=0,sumExp=0,sumUse=0;
  const okb=CP.ok_brands||[];
  okb.sort((a,b)=>(b.e21AppUV||0)-(a.e21AppUV||0));
  okb.forEach(b=>{
    sumDtx+=b.daily_tx||0;sumApp+=b.e21AppUV||0;sumExp+=b.e21ExpUV||0;sumUse+=b.e21UseDly||0;
    cpOkRows+=`<tr><td>${b.name}</td><td>${b.brandId||'—'}</td><td>${b.sp}</td><td>${b.cat4}</td><td class="nc">${b.audit_stores!=null?Math.round(b.audit_stores):'—'}</td><td class="nc">${b.daily_tx?b.daily_tx.toLocaleString():'—'}</td><td class="nc">${b.txPerStore!=null?b.txPerStore:'—'}</td><td class="nc" style="background:#eff6ff">${b.e21AppUV?b.e21AppUV.toLocaleString():'—'}</td><td class="nc" style="background:#eff6ff">${b.e21ExpUV?b.e21ExpUV.toLocaleString():'—'}</td><td class="nc" style="background:#eff6ff">${b.appExpRate!=null?b.appExpRate+'%':'—'}</td><td class="nc" style="background:#eff6ff">${b.e21UseDly!=null?b.e21UseDly:'—'}</td><td class="nc" style="background:#eff6ff">${b.e21EUR7d!=null?b.e21EUR7d+'%':'—'}</td></tr>`});
  const avgRate=sumExp>0&&sumApp>0?(sumExp/sumApp*100).toFixed(1):'—';
  const avgEUR=sumExp>0?(sumUse*7/sumExp*100).toFixed(2):'—';
  cpOkRows+=`<tr style="font-weight:700;background:var(--x1)"><td>合计/均值</td><td></td><td></td><td></td><td></td><td class="nc">${sumDtx.toLocaleString()}</td><td></td><td class="nc" style="background:#dbeafe">${sumApp.toLocaleString()}</td><td class="nc" style="background:#dbeafe">${sumExp.toLocaleString()}</td><td class="nc" style="background:#dbeafe">${avgRate}%</td><td class="nc" style="background:#dbeafe">${sumUse.toFixed(0)}</td><td class="nc" style="background:#dbeafe">${avgEUR}%</td></tr>`;

  (document.getElementById('sopCustPool')||{innerHTML:''}).innerHTML=`
    <div style="font-size:12px;color:var(--x6);margin-bottom:12px">可保留（全达标+人工打标）未存活的 <b>${CP.total}个</b> 品牌，排查老客基数是否支撑1:1曝光目标</div>
    <div style="font-size:11px;color:var(--x5);margin-bottom:14px">排查口径：二选一应曝老客UV（近7日高频+低频）/ 日均交易笔数 ≥ 1</div>
    <div style="display:flex;gap:14px;margin-bottom:14px">
      <div style="flex:1;background:#fff;border-radius:10px;box-shadow:var(--s);padding:18px;position:relative;overflow:hidden">
        <div style="position:absolute;top:0;left:0;right:0;height:3px;background:var(--g)"></div>
        <div style="font-size:12px;color:var(--x5);margin-bottom:6px">老客池子充足</div>
        <div style="display:flex;align-items:baseline;gap:8px">
          <span style="font-size:32px;font-weight:800;color:var(--g)">${CP.ok}</span>
          <span style="font-size:12px;color:var(--x5)">/ ${CP.total}</span>
        </div>
        <div style="font-size:11px;color:var(--g);margin-top:6px">→ 进入达标但未存活品牌分析</div>
      </div>
      <div style="flex:1;background:#fff;border-radius:10px;box-shadow:var(--s);padding:18px;position:relative;overflow:hidden">
        <div style="position:absolute;top:0;left:0;right:0;height:3px;background:var(--o)"></div>
        <div style="font-size:12px;color:var(--x5);margin-bottom:6px">老客池子不足</div>
        <div style="display:flex;align-items:baseline;gap:8px">
          <span style="font-size:32px;font-weight:800;color:var(--o)">${CP.fail}</span>
          <span style="font-size:12px;color:var(--x5)">/ ${CP.total}</span>
        </div>
        <div style="font-size:11px;color:var(--o);margin-top:6px">待排查罗盘规则</div>
      </div>
    </div>
    <details style="margin-bottom:10px">
      <summary style="cursor:pointer;font-size:12px;font-weight:600;color:var(--g);margin-bottom:6px">老客池子充足的 ${CP.ok} 个品牌明细 ▾</summary>
      <div class="tw"><table class="an-tbl"><thead><tr>
        <th>品牌</th><th>品牌ID</th><th>服务商</th><th>业态</th><th class="nc">门店数</th><th class="nc">日均交易笔数</th><th class="nc">1店几笔</th>
        <th class="nc" style="background:#2563eb;color:#fff">应曝UV(7日)</th><th class="nc" style="background:#2563eb;color:#fff">尽曝UV(7日)</th><th class="nc" style="background:#2563eb;color:#fff">应曝尽曝率</th><th class="nc" style="background:#2563eb;color:#fff">日均核销PV</th><th class="nc" style="background:#2563eb;color:#fff">曝光核销率</th>
      </tr></thead><tbody>${cpOkRows}</tbody></table></div>
    </details>
    ${CP.fail>0?`<details>
      <summary style="cursor:pointer;font-size:12px;font-weight:600;color:var(--o);margin-bottom:6px">老客池子不足的 ${CP.fail} 个品牌明细（待确认罗盘规则）▾</summary>
      <div class="tw"><table class="an-tbl"><thead><tr><th>品牌</th><th>品牌ID</th><th>服务商</th><th>业态</th><th class="nc">审核通过门店</th><th class="nc">日均交易笔数</th><th class="nc">1店几笔</th><th class="nc">二选一应曝UV(7日)</th></tr></thead><tbody>${cpFailRows}</tbody></table></div>
    </details>`:''}`;

  // === 象限分析 ===
  const Q=S.quadrant||{}, QS=Q.summary||{}, QR=Q.results||[];
  const qA=QS.A||{count:0},qB=QS.B||{count:0},qC=QS.C||{count:0},qD=QS.D||{count:0},qX=QS.X||{count:0};

  (document.getElementById('sopQuadrant')||{innerHTML:''}).innerHTML=`
    <div style="font-size:12px;color:var(--x5);margin-bottom:16px">可保留（全达标+人工打标）、老客池子充足但未存活的 <b style="color:var(--x7)">${Q.total}个</b> 品牌，按老客曝光充分度和曝光核销率分为四个象限：</div>
    <div style="max-width:860px;margin:0 auto">
      <!-- 上半：曝光充足 → B(左,低核销) + A(右,高核销) -->
      <div style="display:flex">
        <div style="width:150px;flex-shrink:0;display:flex;align-items:center;justify-content:flex-end;padding-right:12px">
          <div style="font-size:10px;color:var(--x5);text-align:right;white-space:nowrap">老客曝光 / 交易笔数 ≥ 1</div>
        </div>
        <div style="flex:1;display:flex;min-width:0">
          <div style="flex:1;min-width:0;padding:20px 22px;background:#f8fafc;border-radius:10px 0 0 0;border-right:1.5px dashed var(--x3);border-bottom:1.5px dashed var(--x3)">
            <div style="font-size:13px;font-weight:700;color:var(--x5);margin-bottom:6px">B · 流量充足、低核销率</div>
            <div style="font-size:40px;font-weight:800;color:var(--x4)">${qB.count}</div>
            ${(()=>{const bBrands=QR.filter(r=>r.quad==='B');if(!bBrands.length)return'<div style="font-size:11px;color:var(--x5);margin-top:8px">无品牌</div>';const names=bBrands.map(b=>b.name).join("、");const detail=bBrands.map(b=>"<b>"+b.name+"</b> 尽曝UV:"+Math.round(b.cur_exp)+" 交易:"+b.daily_tx.toLocaleString()+" 核销率:"+(b.cur_e21_eur!=null?b.cur_e21_eur+"%":"—")).join("<br>");return`<div style="font-size:11px;color:var(--x5);margin-top:8px">持续关注提升转化率 <span onclick="quadDetail('qb_detail')" style="cursor:pointer;color:var(--b);font-weight:600">（${names} ▾）</span></div><div id="qb_detail" style="display:none;margin-top:6px;font-size:10px;color:var(--x6);background:var(--x1);padding:8px 10px;border-radius:5px;line-height:1.7">${detail}</div>`})()}
          </div>
          <div style="flex:1;min-width:0;padding:20px 22px;background:#f8faf8;border-radius:0 10px 0 0;border-bottom:1.5px dashed var(--x3)">
            <div style="font-size:13px;font-weight:700;color:var(--x5);margin-bottom:6px">A · 流量充足、高核销率</div>
            <div style="font-size:40px;font-weight:800;color:var(--x4)">${qA.count}</div>
            <div style="font-size:11px;color:var(--x5);margin-top:8px">健康品牌</div>
          </div>
        </div>
      </div>
      <!-- 下半：曝光不足 → D(左,低核销) + C(右,高核销) — 视觉重心 -->
      <div style="display:flex">
        <div style="width:150px;flex-shrink:0;display:flex;align-items:center;justify-content:flex-end;padding-right:12px">
          <div style="font-size:10px;color:var(--x5);text-align:right;white-space:nowrap">老客曝光 / 交易笔数 < 1</div>
        </div>
        <div style="flex:1;display:flex;min-width:0">
          <div style="flex:1;min-width:0;padding:20px 22px;background:#fff7ed;border-radius:0 0 0 10px;border-right:1.5px dashed var(--x3)">
            <div style="font-size:13px;font-weight:700;color:#9a3412;margin-bottom:6px">D · 流量不足、低核销率</div>
            <div style="font-size:40px;font-weight:800;color:#ea580c">${qD.count}</div>
            <div style="font-size:11px;color:#9a3412;margin-top:8px">其中 <b style="font-size:18px;color:#c2410c">${qD.no_exp}</b> 个老客曝光几乎为0 <span style="font-size:9px;color:#c2410c80">（尽曝UV < 5）</span></div>
            <div style="font-size:11px;color:#9a3412;margin-top:4px"><b style="font-size:18px;color:#c2410c">${qD.has_exp}</b> 个有老客曝光但核销率低 ${(()=>{const dExp=QR.filter(r=>r.quad==='D'&&r.eur_reliable);if(!dExp.length)return'';const names=dExp.map(b=>b.name).join('、');const detail=dExp.map(b=>'<b>'+b.name+'</b> 尽曝UV:'+Math.round(b.cur_exp)+' 交易:'+b.daily_tx.toLocaleString()+' 核销率:'+(b.cur_e21_eur!=null?b.cur_e21_eur+'%':'—')).join('<br>');return`<span onclick="quadDetail('qd_detail')" style="cursor:pointer;color:var(--b);font-weight:600">（${names} ▾）</span></div><div id="qd_detail" style="display:none;margin-top:6px;font-size:10px;color:var(--x6);background:#fff5ed;padding:8px 10px;border-radius:5px;line-height:1.7">${detail}`})()}</div>
          </div>
          <div style="flex:1;min-width:0;padding:20px 22px;background:#fef2f2;border-radius:0 0 10px 0">
            <div style="font-size:13px;font-weight:700;color:#991b1b;margin-bottom:6px">C · 流量不足、高核销率</div>
            <div style="font-size:40px;font-weight:800;color:#dc2626">${qC.count}</div>
            <div style="font-size:11px;color:#991b1b;margin-top:8px"><b style="font-size:18px;color:#dc2626">${qC.has_exp}</b> 个核销率可信，补流量可存活</div>
            <div style="font-size:11px;color:#991b1b;margin-top:4px"><b style="font-size:18px;color:#c2410c">${qC.no_exp}</b> 个老客曝光几乎为0 <span style="font-size:9px;color:#c2410c80">（尽曝UV < 5，核销率不可信）</span></div>
          </div>
        </div>
      </div>
      <!-- X轴标签 -->
      <div style="display:flex;margin-top:8px;padding-left:150px">
        <div style="flex:1;text-align:center;font-size:11px;color:var(--x5)">老客曝光核销率 ≤ 1%</div>
        <div style="flex:1;text-align:center;font-size:11px;color:var(--x5)">老客曝光核销率 > 1%</div>
      </div>
    </div>
    <div style="font-size:10px;color:var(--x4);margin-top:14px;line-height:1.8">
      <b>备注</b>${qX.count?' · 无数据品牌 '+qX.count+' 个，未纳入象限':''}<br>
      · 老客曝光核销率 = 二选一核销PV ÷ 日均老客尽曝UV（暂无独立老客核销字段，以二选一渠道核销估算）<br>
      · 纵轴：日均老客曝光 / 日均交易笔数 ≥ 1 为曝光充分 · 横轴：老客曝光核销率 ≥ 1% 为高核销率
    </div>`;

  // === 补充流量提升测算 ===
  const bCats=Q.boost_by_cat||[];
  const nAlive=Q.newly_alive_count||0, tDelta=Q.total_delta||0;
  const unreliable=Q.unreliable_count||0;
  const reliableCount=(Q.results||[]).filter(r=>r.eur_reliable).length;
  const boostPct=reliableCount?(nAlive/reliableCount*100).toFixed(0):'0';
  const curAll=Math.round((Q.results||[]).reduce((s,r)=>s+r.cur_all,0));
  const newAll=Math.round((Q.results||[]).filter(r=>r.eur_reliable&&r.new_alive).reduce((s,r)=>s+r.new_all,0)+(Q.results||[]).filter(r=>!r.eur_reliable||!r.new_alive).reduce((s,r)=>s+r.cur_all,0));

  let catTableRows='';
  let catSumCurAlive=0, catSumNewAlive=0, catSumCurAll=0, catSumNewAll=0;
  bCats.filter(c=>c.new_alive>0||c.cur_all>0).forEach(c=>{
    const newAliveTotal=(c.cur_alive||0)+c.new_alive;
    catSumCurAlive+=(c.cur_alive||0); catSumNewAlive+=newAliveTotal;
    catSumCurAll+=c.cur_all; catSumNewAll+=c.new_all;
    catTableRows+=`<tr><td>${c.cat}</td><td class="nc">${c.cur_alive||0}</td><td class="nc" style="color:var(--g);font-weight:700">${newAliveTotal}</td><td class="nc">${N(c.cur_all)}</td><td class="nc" style="color:var(--g);font-weight:700">${N(c.new_all)}</td></tr>`});
  catTableRows+=`<tr style="font-weight:700;background:var(--x1)"><td>累计</td><td class="nc">${catSumCurAlive}</td><td class="nc" style="color:var(--g)">${catSumNewAlive}</td><td class="nc">${N(catSumCurAll)}</td><td class="nc" style="color:var(--g)">${N(catSumNewAll)}</td></tr>`;

  let aliveTable='';
  (Q.newly_alive||[]).forEach(r=>{
    const eur=r.capped_eur!=null?r.capped_eur+'%':'—';
    const cap=r.was_capped?' ✂️':'';
    aliveTable+=`<tr><td>${r.name}</td><td>${r.brandId||'—'}</td><td>${r.cat4}</td><td class="nc">${N(r.daily_tx)}</td><td class="nc">${r.cur_exp.toFixed(0)}</td><td class="nc">${eur}${cap}</td><td class="nc">${r.cur_all.toFixed(0)}</td><td class="nc" style="color:var(--g);font-weight:700">${r.new_all.toFixed(0)}</td><td class="nc" style="color:var(--g);font-weight:700">+${r.all_delta.toFixed(0)}</td></tr>`});

  (document.getElementById('sopBoost')||{innerHTML:''}).innerHTML=`
    <div style="font-size:12px;color:var(--x6);margin-bottom:14px;line-height:1.7">假设每个品牌的日均老客曝光补到 : 日均交易笔数 = 1:1，老客二选一曝光核销率保持当前水平（因日均老客尽曝UV少造成曝光核销率异常高的，按20%封顶），其他渠道核销不变。</div>
    <div style="display:flex;gap:14px;flex-wrap:wrap;margin-bottom:22px">
      <div style="flex:1;min-width:240px;background:#fff;border-radius:10px;box-shadow:var(--s);padding:22px;position:relative;overflow:hidden">
        <div style="position:absolute;top:0;left:0;right:0;height:3px;background:var(--g)"></div>
        <div style="font-size:13px;color:var(--x5);font-weight:600;margin-bottom:14px">存活品牌数</div>
        <div style="display:flex;align-items:baseline;gap:16px">
          <div><div style="font-size:12px;color:var(--x4)">当前</div><div style="font-size:36px;font-weight:800;color:var(--x4)">0</div></div>
          <div style="font-size:24px;color:var(--x3)">→</div>
          <div><div style="font-size:12px;color:var(--g)">补流量后</div><div style="font-size:36px;font-weight:800;color:var(--g)">${nAlive}</div></div>
        </div>
        <div style="font-size:12px;color:var(--g);margin-top:8px;font-weight:600">+${nAlive}个 · 有效曝光品牌存活率 <span style="font-size:16px;font-weight:800">${boostPct}%</span></div>
      </div>
      <div style="flex:1;min-width:240px;background:#fff;border-radius:10px;box-shadow:var(--s);padding:22px;position:relative;overflow:hidden">
        <div style="position:absolute;top:0;left:0;right:0;height:3px;background:var(--g)"></div>
        <div style="font-size:13px;color:var(--x5);font-weight:600;margin-bottom:14px">全渠道日均核销</div>
        <div style="display:flex;align-items:baseline;gap:16px">
          <div><div style="font-size:12px;color:var(--x4)">当前</div><div style="font-size:36px;font-weight:800;color:var(--x4)">${N(curAll)}</div></div>
          <div style="font-size:24px;color:var(--x3)">→</div>
          <div><div style="font-size:12px;color:var(--g)">补流量后</div><div style="font-size:36px;font-weight:800;color:var(--g)">${N(newAll)}</div></div>
        </div>
        <div style="font-size:12px;color:var(--g);margin-top:8px;font-weight:600">+${N(tDelta)}</div>
      </div>
      <div style="flex:1;min-width:240px;background:#fff;border-radius:10px;box-shadow:var(--s);padding:22px;position:relative;overflow:hidden">
        <div style="position:absolute;top:0;left:0;right:0;height:3px;background:var(--o)"></div>
        <div style="font-size:13px;color:var(--x5);font-weight:600;margin-bottom:14px">待验证品牌 <span style="font-size:9px;font-weight:600;background:#fff7ed;color:#c2410c;padding:2px 6px;border-radius:3px;margin-left:6px">需尽快推动置顶曝光</span></div>
        <div style="font-size:36px;font-weight:800;color:var(--o)">${unreliable}</div>
        <div style="font-size:12px;color:var(--x6);margin-top:8px;line-height:1.6">日均老客尽曝UV < 5，当前无有效核销数据。<br>需要有老客曝光，才能验证核销率能否达到1%。</div>
      </div>
    </div>
    <div style="margin-bottom:20px">
      <div style="font-size:13px;font-weight:700;color:var(--x7);margin-bottom:10px">分类目测算对比</div>
      <div class="tw"><table class="an-tbl"><thead><tr><th>类目</th><th class="nc">当前存活</th><th class="nc" style="color:var(--g)">补后存活</th><th class="nc">当前核销PV</th><th class="nc" style="color:var(--g)">补后核销PV</th></tr></thead><tbody>${catTableRows}</tbody></table></div>
    </div>
    <details>
      <summary style="cursor:pointer;font-size:12px;font-weight:700;color:var(--b);margin-bottom:8px">${nAlive}个确定新增存活品牌明细 — 点击展开</summary>
      <div class="tw"><table class="an-tbl"><thead><tr><th>品牌</th><th>品牌ID</th><th>类目</th><th class="nc">日均交易</th><th class="nc">日均尽曝UV</th><th class="nc">老客曝光核销率</th><th class="nc">当前核销</th><th class="nc">补后核销</th><th class="nc">增量</th></tr></thead><tbody>${aliveTable}</tbody></table></div>
    </details>
    <div style="font-size:10px;color:var(--x4);margin-top:10px;line-height:1.8">
      <b>测算口径</b><br>
      · 老客曝光核销率 = 二选一核销PV（商业支付+面对面+固定入口）÷ 日均老客尽曝UV，因日均老客尽曝UV少造成曝光核销率异常高的，按20%封顶<br>
      · 日均尽曝 < 5 的品牌核销率样本不足，不参与放大测算<br>
      · 补后全渠道核销 = 补后二选一核销 + 当前其他渠道核销（不变）<br>
      · 存活判定 = 全渠道核销PV ÷ 日均交易笔数 ≥ 1%
    </div>`;

  // === 附录（v4新增） ===
  const apx=S.appendix||{};

  const tailBrands=apx.tail_brands||[];
  let tailRows='';
  tailBrands.sort((a,b)=>(b.audit_stores||0)-(a.audit_stores||0));
  tailBrands.forEach(t=>{tailRows+=`<tr><td>${t.name}</td><td>${t.brandId||'—'}</td><td>${t.sp||'—'}</td><td>${t.cat4||'—'}</td><td>${t.daily_tier||'—'}</td><td class="nc">${t.audit_stores!=null?t.audit_stores:'—'}</td></tr>`});

  const offBrands=apx.diff_no_online_brands||[];
  let offRows='';
  offBrands.forEach(t=>{offRows+=`<tr><td>${t.name}</td><td>${t.brandId||'—'}</td><td>${t.sp||'—'}</td><td>${t.cat4||'—'}</td><td>${t.daily_online||'NULL'}</td><td class="nc">${t.audit_stores!=null?t.audit_stores:'—'}</td></tr>`});

  const ndBrands=apx.diff_no_daily_brands||[];
  let ndRows='';
  ndBrands.forEach(t=>{ndRows+=`<tr><td>${t.name}</td><td>${t.brandId||'—'}</td><td>${t.sp||'—'}</td><td>${t.cat4||'—'}</td><td class="nc">${t.stores!=null?t.stores:'—'}</td></tr>`});

  const ncBrands=apx.diff_no_cat_brands||[];
  let ncRows='';
  ncBrands.forEach(t=>{ncRows+=`<tr><td>${t.name}</td><td>${t.brandId||'—'}</td><td>${t.sp||'—'}</td><td>${t.cat4||'—'}</td><td>${t.cat2||'—'}</td><td class="nc">${t.stores!=null?t.stores:'—'}</td></tr>`});

  // 水位表
  function c(st,k,u){const s=st[k]||{};if(s.med==null)return'<td style="text-align:center">—</td>';const mv=typeof s.med==='number'?s.med.toFixed(1):s.med;const av=typeof s.avg==='number'?s.avg.toFixed(1):s.avg;return`<td style="text-align:center">中位<b>${mv}</b>${u}<br><span style="font-size:9px;color:var(--x4)">均${av}${u} n=${s.n}</span></td>`}
  function cR(st,k){const s=st[k]||{};if(s.med==null)return'<td style="text-align:center">—</td>';const mv=(s.med*100).toFixed(1);const av=(s.avg*100).toFixed(1);return`<td style="text-align:center">中位<b>${mv}</b>%<br><span style="font-size:9px;color:var(--x4)">均${av}% n=${s.n}</span></td>`}
  const refHtml=`<div class="tw" style="margin-top:8px"><table class="ref"><thead><tr><th class="h0" rowspan="2" style="text-align:center"></th><th class="h1" style="text-align:center">经营模式</th><th class="h1" style="text-align:center">货盘</th><th class="h1" style="text-align:center">基建</th><th class="h2" colspan="5" style="text-align:center">上线后</th></tr><tr><th class="h1" style="text-align:center">小程序渗透</th><th class="h1" style="text-align:center">价格力</th><th class="h1" style="text-align:center">1店几笔</th><th class="h2" style="text-align:center">1店几曝(二选一)</th><th class="h2" style="text-align:center">老客应曝尽曝率</th><th class="h2" style="text-align:center">老客二选一曝光占比</th><th class="h2" style="text-align:center">二选一曝光核销率</th><th class="h2" style="text-align:center">到店核销率</th></tr></thead><tbody><tr class="ra"><td style="text-align:center;font-weight:700;background:#fff!important">✅ 存活</td>${c(S.alive_stats,'miniApp','%')}${c(S.alive_stats,'priceForce','%')}${c(S.alive_stats,'txPerStore','')}${c(S.alive_stats,'expPerStore','')}${cR(S.alive_stats,'custAppRate')}${c(S.alive_stats,'e21Ratio','%')}${c(S.alive_stats,'e21EUR','%')}${c(S.alive_stats,'visitUseRate','%')}</tr><tr class="rd"><td style="text-align:center;font-weight:700;background:#fff!important">❌ 未存活</td>${c(S.dead_stats,'miniApp','%')}${c(S.dead_stats,'priceForce','%')}${c(S.dead_stats,'txPerStore','')}${c(S.dead_stats,'expPerStore','')}${cR(S.dead_stats,'custAppRate')}${c(S.dead_stats,'e21Ratio','%')}${c(S.dead_stats,'e21EUR','%')}${c(S.dead_stats,'visitUseRate','%')}</tr></tbody></table></div>`;

  (document.getElementById('sopAppendix')||{innerHTML:''}).innerHTML=`
    <div class="qa" style="margin-bottom:14px">
      <div class="qa-q">📋 腰部品牌指标水位（中位数 & 均值）</div>
      ${refHtml}
    </div>
    <div class="qa">
      <div class="qa-q">分析品牌(${apx.analysis_total}个) vs 概览在线品牌(${apx.manual_total}个) 差异归因</div>
      <div class="tw" style="margin:8px 0"><table class="an-tbl"><thead><tr><th>原因</th><th class="nc">数量</th><th>说明</th></tr></thead><tbody>
        <tr><td>日报无数据</td><td class="nc">${apx.diff_no_daily}</td><td>人工登记在线，日报未更新</td></tr>
        <tr><td>公线类目≠餐饮</td><td class="nc">${apx.diff_no_cat}</td><td>公线标记非餐饮类目</td></tr>
        <tr><td>公线分层≠腰部</td><td class="nc">${apx.diff_no_tier}</td><td>人工标腰部，公线标尾部/KA</td></tr>
        <tr><td>当日未在线</td><td class="nc">${apx.diff_no_online||0}</td><td>人工标在线，公线日报标记当日不在线</td></tr>
        <tr style="font-weight:700;background:var(--x1)"><td>合计</td><td class="nc">${apx.diff_no_daily+apx.diff_no_cat+apx.diff_no_tier+(apx.diff_no_online||0)}</td><td></td></tr>
      </tbody></table></div>
      ${ndBrands.length?`<details style="margin-top:8px">
        <summary style="cursor:pointer;font-size:12px;font-weight:600;color:var(--x6);margin-bottom:6px">📋 日报无数据（${ndBrands.length}个）</summary>
        <div class="tw"><table class="an-tbl"><thead><tr><th>品牌</th><th>品牌ID</th><th>服务商</th><th>业态</th><th class="nc">门店数</th></tr></thead><tbody>${ndRows}</tbody></table></div>
      </details>`:''}
      ${ncBrands.length?`<details style="margin-top:8px">
        <summary style="cursor:pointer;font-size:12px;font-weight:600;color:var(--x6);margin-bottom:6px">📋 公线类目≠餐饮（${ncBrands.length}个）</summary>
        <div class="tw"><table class="an-tbl"><thead><tr><th>品牌</th><th>品牌ID</th><th>服务商</th><th>业态</th><th>公线类目</th><th class="nc">门店数</th></tr></thead><tbody>${ncRows}</tbody></table></div>
      </details>`:''}
      <details style="margin-top:8px">
        <summary style="cursor:pointer;font-size:12px;font-weight:600;color:var(--b);margin-bottom:6px">📋 公线分层≠腰部（${tailBrands.length}个）— 待确认上传门店数，校验分层</summary>
        <div class="tw"><table class="an-tbl"><thead><tr><th>品牌</th><th>品牌ID</th><th>服务商</th><th>业态</th><th>公线分层</th><th class="nc">审核通过门店数</th></tr></thead><tbody>${tailRows}</tbody></table></div>
      </details>
      ${offBrands.length?`<details style="margin-top:8px">
        <summary style="cursor:pointer;font-size:12px;font-weight:600;color:var(--o);margin-bottom:6px">📋 当日未在线（${offBrands.length}个）— 待确认在线状态</summary>
        <div class="tw"><table class="an-tbl"><thead><tr><th>品牌</th><th>品牌ID</th><th>服务商</th><th>业态</th><th>当日在线状态</th><th class="nc">门店数</th></tr></thead><tbody>${offRows}</tbody></table></div>
      </details>`:''}
    </div>
    <div class="qa" style="margin-top:14px">
      <div class="qa-q">🔴 0核销品牌专项分析</div>
      <div style="font-size:12px;color:var(--x5);margin:8px 0 12px">在线腰部餐饮品牌中，全渠道7日曝光PV > 0 但 全渠道7日核销 = 0 的品牌逐层排查</div>
      ${(()=>{
        const ZU=S.zero_use||{};
        const tbl='<table style="width:100%;font-size:11px;border-collapse:collapse">';
        const thBase='<thead><tr style="background:var(--x0)"><th style="padding:5px 8px;text-align:left">品牌</th><th style="padding:5px 8px">品牌ID</th><th style="padding:5px 8px">服务商</th><th style="padding:5px 8px">负责人</th><th style="padding:5px 8px">业态</th><th style="padding:5px 8px" class="nc">门店数</th><th style="padding:5px 8px" class="nc">日均交易(w)</th><th style="padding:5px 8px" class="nc">1店几笔</th><th style="padding:5px 8px" class="nc">小程序占比</th><th style="padding:5px 8px" class="nc">价格力</th><th style="padding:5px 8px">待排查问题</th></tr></thead>';
        const thFlow='<thead><tr style="background:var(--x0)"><th style="padding:5px 8px;text-align:left">品牌</th><th style="padding:5px 8px">品牌ID</th><th style="padding:5px 8px">服务商</th><th style="padding:5px 8px">负责人</th><th style="padding:5px 8px">业态</th><th style="padding:5px 8px" class="nc">门店数</th><th style="padding:5px 8px" class="nc">日均交易(w)</th><th style="padding:5px 8px" class="nc">1店几笔</th><th style="padding:5px 8px" class="nc">小程序占比</th><th style="padding:5px 8px" class="nc">价格力</th><th style="padding:5px 8px" class="nc">日均曝光(w)</th><th style="padding:5px 8px" class="nc">日均尽曝UV</th><th style="padding:5px 8px" class="nc">7日应曝UV</th></tr></thead>';
        function issSpan(b){return b.issues.map(i=>'<span style="display:inline-block;font-size:9px;font-weight:600;padding:1px 4px;border-radius:3px;background:'+({'经营模式':'#b4585220','货盘':'#b4925220','基建':'#5a8aad20'}[i]||'#eee')+';color:'+({'经营模式':'#b45852','货盘':'#b49252','基建':'#5a8aad'}[i]||'#666')+';margin:1px">'+i+'</span>').join('')}
        function baseRow(b){return '<tr><td style="padding:4px 8px;font-weight:600">'+b.name+'</td><td style="padding:4px 8px">'+(b.brandId||'—')+'</td><td style="padding:4px 8px">'+(b.sp||'—')+'</td><td style="padding:4px 8px">'+(b.owner||'—')+'</td><td style="padding:4px 8px">'+(b.cat4||'—')+'</td><td style="padding:4px 8px" class="nc">'+(b.storeCount!=null?b.storeCount:'—')+'</td><td style="padding:4px 8px" class="nc">'+(b.dailyTx!=null?b.dailyTx+'w':'—')+'</td><td style="padding:4px 8px" class="nc">'+(b.txPerStore!=null?b.txPerStore:'—')+'</td><td style="padding:4px 8px" class="nc">'+(b.miniApp!=null?_P(b.miniApp):'—')+'</td><td style="padding:4px 8px" class="nc">'+(b.priceForce!=null?(b.priceForce>0?'+':'')+_P(b.priceForce).replace('—',''):'—')+'</td><td style="padding:4px 8px">'+issSpan(b)+'</td></tr>'}
        function flowRow(b){return '<tr><td style="padding:4px 8px;font-weight:600">'+b.name+'</td><td style="padding:4px 8px">'+(b.brandId||'—')+'</td><td style="padding:4px 8px">'+(b.sp||'—')+'</td><td style="padding:4px 8px">'+(b.owner||'—')+'</td><td style="padding:4px 8px">'+(b.cat4||'—')+'</td><td style="padding:4px 8px" class="nc">'+(b.storeCount!=null?b.storeCount:'—')+'</td><td style="padding:4px 8px" class="nc">'+(b.dailyTx!=null?b.dailyTx+'w':'—')+'</td><td style="padding:4px 8px" class="nc">'+(b.txPerStore!=null?b.txPerStore:'—')+'</td><td style="padding:4px 8px" class="nc">'+(b.miniApp!=null?_P(b.miniApp):'—')+'</td><td style="padding:4px 8px" class="nc">'+(b.priceForce!=null?(b.priceForce>0?'+':'')+_P(b.priceForce).replace('—',''):'—')+'</td><td style="padding:4px 8px" class="nc">'+(b.expPvW||'—')+'</td><td style="padding:4px 8px" class="nc">'+b.dailyExpUV+'</td><td style="padding:4px 8px" class="nc">'+(b.e21AppUV7d||'—')+'</td></tr>'}
        const cs='background:#fff;border-radius:10px;box-shadow:var(--s);padding:18px;position:relative;overflow:hidden';
        function topBar(color){return '<div style="position:absolute;top:0;left:0;right:0;height:3px;background:'+color+'"></div>'}
        const csB='background:#fff;border-radius:10px;box-shadow:var(--s);padding:14px;position:relative;overflow:hidden;margin-top:8px';
        return `<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;align-items:start;margin-bottom:14px">
          <div style="display:flex;flex-direction:column;gap:0">
            <div style="${cs};min-height:120px">
              ${topBar('#dc2626')}
              <div style="font-size:12px;color:var(--x5);margin-bottom:6px">有曝光0核销</div>
              <div style="font-size:32px;font-weight:800;color:#dc2626">${ZU.total}</div>
            </div>
          </div>
          <div style="display:flex;flex-direction:column;gap:0">
            <div style="${cs};min-height:120px">
              ${topBar('var(--g)')}
              <div style="font-size:12px;color:var(--x5);margin-bottom:6px">四要素达标</div>
              <div style="font-size:32px;font-weight:800;color:var(--g)">${ZU.pass_count}</div>
            </div>
            <div style="${csB}">
              ${topBar('#b45852')}
              <div style="font-size:12px;color:#b45852;margin-bottom:6px">↓ 不达标</div>
              <div style="font-size:24px;font-weight:800;color:#b45852">${ZU.fail_count}</div>
              <div style="font-size:10px;color:var(--x4);margin-top:4px">待排查四要素</div>
            </div>
          </div>
          <div style="display:flex;flex-direction:column;gap:0">
            <div style="${cs};min-height:120px">
              ${topBar('var(--b)')}
              <div style="font-size:12px;color:var(--x5);margin-bottom:6px">老客基数够</div>
              <div style="font-size:32px;font-weight:800;color:var(--b)">${ZU.pool_ok||0}</div>
            </div>
            <div style="${csB}">
              ${topBar('var(--o)')}
              <div style="font-size:12px;color:var(--o);margin-bottom:6px">↓ 基数不够</div>
              <div style="font-size:24px;font-weight:800;color:var(--o)">${ZU.pool_fail}</div>
              <div style="font-size:10px;color:var(--x4);margin-top:4px">待确认罗盘规则</div>
            </div>
          </div>
          <div style="display:flex;flex-direction:column;gap:0">
            <div style="${cs};min-height:120px;border:2px solid #c2410c">
              ${topBar('#c2410c')}
              <div style="font-size:12px;color:var(--x5);margin-bottom:6px">老客尽曝UV < 5</div>
              <div style="font-size:32px;font-weight:800;color:#c2410c">${ZU.uv_lt5}</div>
              <div style="margin-top:6px"><span style="font-size:9px;font-weight:600;background:#fff7ed;color:#c2410c;padding:2px 6px;border-radius:3px">${ZU.uv_lt5_pct||0}%在待验证${Q.unreliable_count||0}个中，需尽快置顶曝光</span></div>
            </div>
          </div>
        </div>`
        +(ZU.fail_brands&&ZU.fail_brands.length?'<details style="margin-top:8px"><summary style="cursor:pointer;font-size:12px;font-weight:600;color:#b45852;margin-bottom:6px">↓ 四要素不达标（'+ZU.fail_count+'个）→ 待排查四要素 ▾</summary><div class="tw">'+tbl+thBase+'<tbody>'+ZU.fail_brands.map(baseRow).join('')+'</tbody></table></div></details>':'')
        +(ZU.pool_fail_brands&&ZU.pool_fail_brands.length?'<details style="margin-top:8px"><summary style="cursor:pointer;font-size:12px;font-weight:600;color:var(--o);margin-bottom:6px">↓ 老客基数不够（'+ZU.pool_fail+'个）→ 待确认罗盘规则 ▾</summary><div class="tw">'+tbl+thFlow+'<tbody>'+ZU.pool_fail_brands.map(flowRow).join('')+'</tbody></table></div></details>':'')
        +(ZU.pool_ok_brands&&ZU.pool_ok_brands.length?'<details style="margin-top:8px"><summary style="cursor:pointer;font-size:12px;font-weight:600;color:#c2410c;margin-bottom:6px">→ 尽曝UV < 5（'+(ZU.pool_ok||0)+'个）→ 需公线尽快置顶 ▾</summary><div class="tw">'+tbl+thFlow+'<tbody>'+ZU.pool_ok_brands.map(flowRow).join('')+'</tbody></table></div></details>':'');
      })()}
    </div>`;

}

function rov(){const tb=document.querySelector('#spTbl tbody');tb.innerHTML='';Object.keys(SPS).filter(k=>SPS[k].brands.length>0 && (SPS[k].target||0)>0).sort((a,b)=>{const ta=SPS[a].type||'',tb2=SPS[b].type||'';return(ta.indexOf('SaaS')>=0?0:1)-(tb2.indexOf('SaaS')>=0?0:1)||SPS[b].brands.length-SPS[a].brands.length}).forEach(k=>{const s=SPS[k],bs2=W.filter(b=>b.spMapped===k);if(!bs2.length)return;const o2=bs2.filter(b=>b.statusManual==='在线'),l2=bs2.filter(b=>b.statusManual==='流失'),a2=o2.filter(b=>b.isAlive===true);const sr2=o2.length?(a2.length/o2.length*100).toFixed(1):'—';const p2=s.target?(bs2.length/s.target*100).toFixed(1):'—';const pc=parseFloat(p2)>=100?'pf-g':parseFloat(p2)>=60?'pf-b':'pf-o';tb.innerHTML+=`<tr><td><b>${s.name}</b></td><td>${s.type||'—'}</td><td>${s.owner||'—'}</td><td class="nc">${s.target||'—'}</td><td class="nc"><b>${bs2.length}</b></td><td class="nc">${o2.length}</td><td class="nc">${l2.length}</td><td class="nc">${a2.length}</td><td class="nc ${parseFloat(sr2)>=50?'oc':'wc'}">${sr2}%</td><td style="min-width:80px"><div class="pb"><div class="pf ${pc}" style="width:${Math.min(parseFloat(p2)||0,100)}%"></div></div><div class="pt">${p2}%</div></td></tr>`})}

// ========== 引入进度：概览 4 大卡 + 每日折线图（绿线=当日在线 / 蓝线=累计已投放）==========
const INTRO_CATERING = new Set(['正餐','茶饮咖啡','中式快餐','甜品烘焙','西式快餐','小吃','其他餐饮']);
var _introChart = null;
var _aliveChart = null;

function _introAddDays(isoDate, delta){
  const d = new Date(isoDate + 'T00:00:00');
  d.setDate(d.getDate() + delta);
  return d.toISOString().substring(0,10);
}

// 绿线口径：每天 tier=腰部 ∩ 餐饮 ∩ online_today=true 的 brand_id 集合
function _introGreenMap(trendRows){
  const m = {};
  (trendRows||[]).forEach(function(r){
    if (!r) return;
    if (r.tier !== '腰部') return;
    if (r.online_today !== true) return;
    const d = r.data_date;
    if (!m[d]) m[d] = new Set();
    m[d].add(r.brand_id);
  });
  return m;
}

// 蓝线口径：截至每日，跟进表(腰部×在线+流失)的 brand_id 中，first_seen_in_daily <= 当日 的去重数
// first_seen 不按 tier/餐饮筛选，取任何 trendRows 里的第一次出现
function _introBlueArr(trendRows, dates, followBids){
  const firstSeen = {};
  (trendRows||[]).forEach(function(r){
    if (!r || r.brand_id == null) return;
    const bid = r.brand_id, d = r.data_date;
    if (firstSeen[bid] == null || d < firstSeen[bid]) firstSeen[bid] = d;
  });
  const events = [];
  Object.keys(firstSeen).forEach(function(bid){
    const b = Number(bid);
    if (followBids.has(b)) events.push([firstSeen[bid], b]);
  });
  events.sort(function(a,b){ return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0; });
  const cum = new Set();
  const out = [];
  let idx = 0;
  dates.forEach(function(d){
    while (idx < events.length && events[idx][0] <= d){
      cum.add(events[idx][1]); idx++;
    }
    out.push(cum.size);
  });
  return out;
}

// 近 N 天均值（含当天，不足 N 天取现有天数）
function _introAvgNDays(dailyMap, endDate, n){
  let total = 0, cnt = 0;
  for (let i = 0; i < n; i++){
    const d = _introAddDays(endDate, -i);
    if (dailyMap[d]) { total += dailyMap[d].size; cnt++; }
  }
  return cnt > 0 ? total / cnt : null;
}

// 上周同期（endDate 往前 7 天那天的值）
function _introSameDayLastWeek(dailyMap, endDate){
  const d = _introAddDays(endDate, -7);
  return dailyMap[d] ? dailyMap[d].size : null;
}

function rintro(D){
  const targetDate = (F && F.dataDate) || '';
  const dd = document.getElementById('introDataDate');
  if (dd) dd.textContent = targetDate;

  // ========== 1. 概览 4 大卡 ==========
  // 口径：以跟进表为锚（腰部×(在线+流失)），不再用日报 cat4 过滤
  // 理由：跟进表里腰部商户默认都是餐饮，日报类目/分层可能有打标误差；跟进表是引入进展的真实源
  const wc = (BS||[]).filter(b => b.tierManual === '腰部');
  // 已投放 = 跟进表腰部×(在线+流失)
  const deployed = wc.filter(b => b.statusManual === '在线' || b.statusManual === '流失').length;
  // 流失 = 已投放 - 当日日报在线（跟进表池里今日日报不在线的）
  const lost = deployed - wc.filter(b => b.onlineToday === true).length;
  // 跟进表在线 = 跟进表腰部×status=在线（用于 0426+ 骤降提示：y=跟进表在线，x=y-日报在线）
  const followOnlineCnt = wc.filter(b => b.statusManual === '在线').length;
  const totalTarget = (F && F.totalTarget) || 800;
  const deployedPct = totalTarget > 0 ? (deployed/totalTarget*100) : 0;

  // 在线 / 存活 = 跟进表池 ∩ 日报 online_today=true（保留日报口径）
  const onlineBS = wc.filter(b => b.onlineToday === true);
  const aliveBS = onlineBS.filter(b => b.isAlive === true);
  const todayOnline = onlineBS.length;
  const todayAlive = aliveBS.length;
  const todayRate = todayOnline > 0 ? todayAlive/todayOnline : null;

  // 0426 后在线骤降提示：若 targetDate >= 2026-04-26 且 跟进表在线 > 日报在线，挂⚠️悬浮
  // 方案B: 仅把"真腰部×餐饮×离线"算入"实际在线"(曝光<100 被误伤)，
  //         日报分层/类目/字段异常的另外归一类（待校正），不并入在线数
  try {
    const warnEl = document.getElementById('introTrendWarn');
    if (warnEl){
      if (targetDate >= '2026-04-26' && followOnlineCnt > todayOnline){
        // 从 wc (跟进表腰部) 里拆: 非在线 且 属于餐饮 且 按审核通过门店数判仍为腰部 → 误伤
        const CAT = INTRO_CATERING;
        const ZHENGCAN = new Set(['正餐']);
        const _offline = wc.filter(b => b.onlineToday !== true && b.statusManual === '在线');
        let realWaistOffline = 0, needFix = 0;
        _offline.forEach(b => {
          const cat = b.cat4;
          const sc = b.storeCount;
          if (!CAT.has(cat)){ needFix++; return; }           // 非餐饮类目
          if (sc == null){ needFix++; return; }              // 门店数缺失
          const thr = ZHENGCAN.has(cat) ? 5 : 20;
          if (sc >= thr) realWaistOffline++;                 // 符合腰部阈值 → 真误伤
          else needFix++;                                     // 不达阈值 → 待校正
        });
        const realTotal = todayOnline + realWaistOffline;
        warnEl.style.display = 'inline';
        warnEl.textContent = '⚠️';
        warnEl.title =
          '实际在线 '+todayOnline+'+'+realWaistOffline+' = '+realTotal+' 家\n'+
          '看板在线 '+todayOnline+' 家；'+(followOnlineCnt-todayOnline)+' 家未被统计到：\n'+
          '1）'+realWaistOffline+' 家因曝光<100 被误伤（周末线上全量上线周边挤占线下流量）\n'+
          '2）'+needFix+' 家因日报分层/类目/字段异常，需运营在跟进表或公线校正后纳入';
      } else {
        warnEl.style.display = 'none';
      }
    }
  } catch(e){}

  // 上周同期（仅绿线口径可算）
  const greenMap = _introGreenMap((D && D.trendRows) || []);
  const lastWeekOnline = _introSameDayLastWeek(greenMap, targetDate);

  const card = function(label, icon, bigValue, bigUnit, subHtml, color){
    return '<div style="background:#fff;border:1px solid #e5e7eb;border-radius:10px;padding:16px 18px">' +
      '<div style="font-size:12px;color:#64748b;font-weight:600">'+icon+' '+label+'</div>' +
      '<div style="font-size:32px;font-weight:800;color:'+(color||'#1e293b')+';margin-top:6px;line-height:1.1">' +
        bigValue + (bigUnit ? '<span style="font-size:14px;color:#94a3b8;font-weight:500;margin-left:4px">'+bigUnit+'</span>' : '') +
      '</div>' + (subHtml||'') +
    '</div>';
  };

  // 已投放卡 - 带进度条
  const depBarHtml = '<div style="margin-top:8px"><div style="height:6px;background:#e2e8f0;border-radius:3px;overflow:hidden"><div style="height:100%;width:'+Math.min(deployedPct,100).toFixed(1)+'%;background:linear-gradient(90deg,#3b82f6,#2563eb);transition:width .4s"></div></div><div style="font-size:11px;color:#64748b;margin-top:4px">完成度 <b style="color:#2563eb">'+deployedPct.toFixed(1)+'%</b> · 目标 '+totalTarget+'</div></div>';

  // 在线卡 - 今日 vs 上周同期
  let onlineSub = '';
  if (lastWeekOnline != null){
    const delta = todayOnline - lastWeekOnline;
    const color = delta > 0 ? '#059669' : delta < 0 ? '#dc2626' : '#64748b';
    const arrow = delta > 0 ? '↑' : delta < 0 ? '↓' : '→';
    const pct = lastWeekOnline > 0 ? (delta/lastWeekOnline*100) : 0;
    const sign = delta > 0 ? '+' : '';
    onlineSub = '<div style="font-size:11px;color:#94a3b8;margin-top:6px">上周同期 <b style="color:#475569">'+lastWeekOnline+'</b></div>' +
                '<div style="font-size:11px;margin-top:2px;color:'+color+';font-weight:600">'+arrow+' '+sign+delta+' ('+sign+pct.toFixed(1)+'%)</div>';
  }

  let html = '';
  html += card('已投放', '📦', deployed + '<span style="font-size:14px;color:#94a3b8;font-weight:500;margin-left:4px">（含流失 '+lost+'）</span>', '/ ' + totalTarget, depBarHtml, '#2563eb');
  html += card('在线',   '📡', todayOnline, '家', onlineSub, '#059669');
  html += card('存活',   '✅', todayAlive,  '家', '<div style="font-size:11px;color:#94a3b8;margin-top:6px">当日截面 · 近7日存活率 ≥ 1%</div>', '#059669');
  const rateStr = todayRate != null ? (todayRate*100).toFixed(1)+'%' : '—';
  html += card('存活率', '📊', rateStr, '', '<div style="font-size:11px;color:#94a3b8;margin-top:6px">存活 / 在线</div>', '#0369a1');

  const kg = document.getElementById('introKg');
  if (kg) kg.innerHTML = html;

  // ========== 2. 每日折线图：绿线=当日在线 / 蓝线=累计已投放 ==========
  // 蓝线口径对齐概览卡：跟进表腰部×(在线+流失)，不再筛日报 cat4
  const followBids = new Set();
  (BS||[]).forEach(function(b){
    if (b && b.tierManual === '腰部'
        && (b.statusManual === '在线' || b.statusManual === '流失')
        && b.brandId != null){
      followBids.add(Number(b.brandId));
    }
  });

  const allDates = Array.from(new Set((D.trendRows||[]).map(r => r.data_date))).sort();
  const xDates = allDates.filter(d => d <= targetDate && d >= '2026-04-01');
  if (xDates.length === 0){
    document.getElementById('introTrendChart').innerHTML = '<div style="padding:40px;text-align:center;color:#94a3b8;font-size:12px">暂无数据</div>';
    return;
  }
  const greenSeries = xDates.map(d => greenMap[d] ? greenMap[d].size : 0);
  const blueSeries  = _introBlueArr(D.trendRows||[], xDates, followBids);

  const el = document.getElementById('introTrendChart');
  if (typeof echarts === 'undefined'){
    el.innerHTML = '<div style="padding:40px;text-align:center;color:#dc2626;font-size:12px">ECharts 未加载</div>';
    return;
  }
  if (_introChart){ _introChart.dispose(); _introChart = null; }
  _introChart = echarts.init(el);
  // X 轴稀疏：首日 + 每 7 天 + 末日
  const xLabelFmt = function(val, idx){
    const isFirst = idx === 0;
    const isLast = idx === xDates.length - 1;
    if (isFirst || isLast || idx % 7 === 0){
      return val.substring(5);
    }
    return '';
  };
  _introChart.setOption({
    grid: {left: 52, right: 56, top: 50, bottom: 36},
    tooltip: {
      trigger: 'axis',
      formatter: function(params){
        let s = '<b>'+params[0].axisValue+'</b>';
        params.forEach(function(p){
          s += '<br>'+p.marker+p.seriesName+': <b>'+p.value+'</b> 家';
        });
        // gap: 蓝 - 绿
        const green = params.find(p => p.seriesName.indexOf('在线') >= 0);
        const blue  = params.find(p => p.seriesName.indexOf('已投放') >= 0);
        if (green && blue){
          const gap = blue.value - green.value;
          s += '<br><span style="color:#94a3b8">池中当日未在线: <b>'+gap+'</b></span>';
        }
        return s;
      }
    },
    xAxis: {
      type: 'category',
      data: xDates,
      boundaryGap: false,
      axisLabel: {fontSize: 10, color: '#64748b', formatter: xLabelFmt, interval: 0},
      axisLine: {lineStyle: {color: '#cbd5e1'}},
      axisTick: {show: false}
    },
    yAxis: [
      {
        type: 'value',
        name: '在线',
        position: 'left',
        nameTextStyle: {fontSize: 11, color: '#059669', fontWeight: 600, align: 'right'},
        nameGap: 22,
        axisLabel: {fontSize: 10, color: '#059669'},
        splitLine: {lineStyle: {color: '#e2e8f0', type: 'dashed'}},
        scale: true
      },
      {
        type: 'value',
        name: '已投放',
        position: 'right',
        nameTextStyle: {fontSize: 11, color: '#2563eb', fontWeight: 600, align: 'left'},
        nameGap: 22,
        axisLabel: {fontSize: 10, color: '#2563eb'},
        splitLine: {show: false},
        scale: true
      }
    ],
    series: [
      {
        name: '当日在线（腰部×餐饮）',
        type: 'line',
        yAxisIndex: 0,
        smooth: false,
        symbol: 'circle',
        symbolSize: function(v, p){ return p.dataIndex === xDates.length-1 ? 8 : 4 },
        lineStyle: {width: 2, color: '#059669'},
        itemStyle: {color: '#059669'},
        areaStyle: {color: {type: 'linear', x:0,y:0,x2:0,y2:1, colorStops: [
          {offset: 0, color: 'rgba(5,150,105,0.14)'},
          {offset: 1, color: 'rgba(5,150,105,0.01)'}
        ]}},
        data: greenSeries
      },
      {
        name: '累计已投放（跟进表·腰部×在线+流失）',
        type: 'line',
        yAxisIndex: 1,
        smooth: false,
        symbol: 'circle',
        symbolSize: function(v, p){ return p.dataIndex === xDates.length-1 ? 8 : 4 },
        lineStyle: {width: 2, color: '#2563eb', type: 'solid'},
        itemStyle: {color: '#2563eb'},
        data: blueSeries
      }
    ]
  });
  if (!window._introResizeBound){
    window._introResizeBound = true;
    window.addEventListener('resize', function(){
      if (_introChart) _introChart.resize();
      if (_aliveChart) _aliveChart.resize();
    });
  }

  // ========== 3. 存活率趋势图（右半）==========
  // 每日存活率 = (tier=腰部∩餐饮∩online_today=1∩is_alive=true) / (tier=腰部∩餐饮∩online_today=1)
  const aliveDaily = {};
  (D.trendRows||[]).forEach(function(r){
    if (!r) return;
    if (r.tier !== '腰部') return;
    if (r.online_today !== true) return;
    const d = r.data_date;
    if (!aliveDaily[d]) aliveDaily[d] = {online:0, alive:0};
    aliveDaily[d].online++;
    if (r.is_alive === true) aliveDaily[d].alive++;
  });
  const aliveSeries = xDates.map(function(d){
    const v = aliveDaily[d];
    if (!v || v.online === 0) return null;
    return +(v.alive/v.online*100).toFixed(1);
  });
  const aliveCntSeries = xDates.map(function(d){
    const v = aliveDaily[d];
    return v ? v.alive : 0;
  });
  const aliveEl = document.getElementById('introAliveChart');
  if (!aliveEl) return;
  if (_aliveChart){ _aliveChart.dispose(); _aliveChart = null; }
  _aliveChart = echarts.init(aliveEl);
  _aliveChart.setOption({
    grid: {left: 56, right: 56, top: 36, bottom: 36},
    legend: {show: false},
    tooltip: {
      trigger: 'axis',
      formatter: function(params){
        const d = params[0].axisValue;
        const v = aliveDaily[d] || {online:0,alive:0};
        let s = '<b>'+d+'</b>';
        params.forEach(function(p){
          const unit = p.seriesName === '存活率' ? '%' : '家';
          s += '<br>'+p.marker+p.seriesName+': <b>'+p.value+unit+'</b>';
        });
        s += '<br><span style="color:#94a3b8">存活 '+v.alive+' / 在线 '+v.online+'</span>';
        return s;
      }
    },
    xAxis: {
      type: 'category',
      data: xDates,
      boundaryGap: false,
      axisLabel: {fontSize: 10, color: '#64748b', formatter: xLabelFmt, interval: 0},
      axisLine: {lineStyle: {color: '#cbd5e1'}},
      axisTick: {show: false}
    },
    yAxis: [
      {
        type: 'value',
        name: '存活',
        position: 'left',
        nameTextStyle: {fontSize: 11, color: '#10b981', fontWeight: 600, align: 'right'},
        nameGap: 22,
        axisLabel: {fontSize: 10, color: '#10b981'},
        splitLine: {lineStyle: {color: '#e2e8f0', type: 'dashed'}},
        scale: true,
        min: 0
      },
      {
        type: 'value',
        name: '存活率',
        position: 'right',
        nameTextStyle: {fontSize: 11, color: '#0369a1', fontWeight: 600, align: 'left'},
        nameGap: 22,
        axisLabel: {fontSize: 10, color: '#0369a1', formatter: '{value}%'},
        splitLine: {show: false},
        scale: true,
        min: 0
      }
    ],
    series: [{
      name: '存活品牌数',
      type: 'line',
      yAxisIndex: 0,
      smooth: false,
      symbol: 'circle',
      symbolSize: function(v, p){ return p.dataIndex === xDates.length-1 ? 8 : 4 },
      lineStyle: {width: 2, color: '#10b981'},
      itemStyle: {color: '#10b981'},
      data: aliveCntSeries
    },{
      name: '存活率',
      type: 'line',
      yAxisIndex: 1,
      smooth: false,
      symbol: 'circle',
      symbolSize: function(v, p){ return p.dataIndex === xDates.length-1 ? 8 : 4 },
      lineStyle: {width: 2, color: '#0369a1'},
      itemStyle: {color: '#0369a1'},
      areaStyle: {color: {type: 'linear', x:0,y:0,x2:0,y2:1, colorStops: [
        {offset: 0, color: 'rgba(3,105,161,0.14)'},
        {offset: 1, color: 'rgba(3,105,161,0.01)'}
      ]}},
      data: aliveSeries
    }]
  });
}

// ========== Tab 1 · A-1 · 四要素检查总览 4 卡 ==========
function rfc(){
  const el = document.getElementById('fcKg');
  if (!el) return;
  // 口径：腰部 × 餐饮 × 跟进表 status='在线'（过滤流失和筹备中）× 日报 online_today
  const wc = (BS||[]).filter(b =>
    b.tierManual === '腰部' &&
    b.statusManual === '在线'
  );
  const online = wc.filter(b => b.onlineToday === true);
  // 系统全达标
  const allPass = online.filter(b => b.bizOk===true && b.priceOk===true && b.infraOk===true && b.trafficOk===true);

  // 非全达标: 按维度分类
  // 数据缺失 (missing) = 四要素任一为 null/undefined
  // keep / progress / offline / nofb 来自反馈规则
  const notPass = online.filter(b => !allPass.includes(b));
  const _bidClass = {};
  notPass.forEach(b => {
    const bid = b.brandId;
    // 先判是否有数据缺失（任一要素 null）
    const hasNull = (b.bizOk == null || b.priceOk == null || b.infraOk == null || b.trafficOk == null);
    if (hasNull){ _bidClass[bid] = 'missing'; return; }
    // 只取 false 的维度做分类
    const issues = [];
    if (b.bizOk === false) issues.push('经营模式');
    if (b.priceOk === false) issues.push('货盘');
    if (b.infraOk === false) issues.push('基建-商户号');
    if (b.trafficOk === false) issues.push('基建-门店');
    if (!issues.length){ _bidClass[bid] = 'nofb'; return; }
    const classes = issues.map(iss => {
      const fkey = _mkIssue2Field[iss];
      const val = (_fbCache[bid+'_'+fkey]||'').trim();
      return _mkClassify(iss, val);
    });
    if (classes.includes('offline')) _bidClass[bid] = 'offline';
    else if (classes.includes('nofb')) _bidClass[bid] = 'nofb';
    else if (classes.includes('progress')) _bidClass[bid] = 'progress';
    else _bidClass[bid] = 'keep';
  });
  const keepN    = notPass.filter(b => _bidClass[b.brandId] === 'keep').length;
  const pendingN = notPass.filter(b => _bidClass[b.brandId] === 'progress' || _bidClass[b.brandId] === 'nofb').length;
  const offlineN = notPass.filter(b => _bidClass[b.brandId] === 'offline').length;
  const missingN = notPass.filter(b => _bidClass[b.brandId] === 'missing').length;

  // offline 从 online 母数里去掉
  const onlineCorrected = online.length - offlineN;

  const card = function(label, icon, value, unit, sub, color){
    return '<div style="background:#fff;border:1px solid #e5e7eb;border-radius:10px;padding:16px 18px">' +
      '<div style="font-size:12px;color:#64748b;font-weight:600">'+icon+' '+label+'</div>' +
      '<div style="font-size:32px;font-weight:800;color:'+(color||'#1e293b')+';margin-top:6px;line-height:1.1">' +
        value + (unit ? '<span style="font-size:14px;color:#94a3b8;font-weight:500;margin-left:4px">'+unit+'</span>' : '') +
      '</div>' + (sub ? '<div style="font-size:11px;color:#94a3b8;margin-top:6px">'+sub+'</div>' : '') +
    '</div>';
  };

  let html = '';
  let subOnline = '腰部×餐饮×跟进在线×日报在线';
  if (offlineN > 0) subOnline += '<br><span style="color:#94a3b8">（已扣除计划下线 '+offlineN+' 家）</span>';
  html += card('在线',       '📡', onlineCorrected, '家', subOnline, '#059669');
  html += card('系统全达标', '✅', allPass.length, '家', '经营 / 价格力 / 商户号 / 门店 全 ok', '#16a34a');
  html += card('人工打标',   '🏷', keepN,  '家', '四要素失分 经人工打标合理保留', '#0d9488');
  html += card('整改中',     '⚠️', pendingN, '家', '待跟进 + 未反馈 · 目标清 0'+(missingN>0?'<br><span style="color:#94a3b8">（数据缺失 '+missingN+' 家未计入）</span>':''), '#dc2626');
  el.innerHTML = html;
}

// ========== Tab 1 · A-2 · 人工打标三层折叠矩阵 ==========
// 展开状态缓存
var _markExpanded = { activeClass: 'keep', activeIssue: null, activeSp: {} }; // 一级: 分类, 二级: 四要素维度, 三级: {reason: sp}

// 四要素 × 分类 的规则 (复制自 rsop 内部, 保持一致)
const _mkIssue2Field = {'经营模式':'screen_biz','货盘':'screen_price','基建-商户号':'screen_infra','基建-门店':'screen_store'};
const _mkKeepRules = {
  '经营模式': ['会员占比超过50%','沟通确认后希望在线','准备切代金券投放','代金券投放中'],
  '货盘': ['全场券','已更新更优货盘，价格力更新延迟'],
  '基建-商户号': ['经营规模小，1店<10笔合理'],
  '基建-门店': ['公线真实门店不准需修正','服务商仅覆盖部分门店，已全部上传','已整改，待内部确认']
};
const _mkOffRules = {
  '经营模式': ['不接受代金券，计划下线'],
  '货盘': ['商家无法提供，计划下线'],
  '基建-商户号': ['商家无法获取，计划下线'],
  '基建-门店': ['商家无法上传，计划下线']
};
const _mkProgRules = {
  '经营模式': ['沟通确认中','已沟通，整改中'],
  '货盘': ['沟通确认中','已沟通，整改中'],
  '基建-商户号': ['沟通确认中','基建沟通中','已沟通，整改中','总部拿不到商户号，待沟通pos商或门店给420单号方案'],
  '基建-门店': ['沟通确认中','已沟通，整改中']
};

function _mkClassify(issue, val){
  if (!val) return 'nofb';
  if (val === '已沟通，未回复') return 'nofb'; // 无实质反馈 → 归入未反馈
  if ((_mkOffRules[issue]||[]).includes(val)) return 'offline';
  if ((_mkKeepRules[issue]||[]).includes(val)) return 'keep';
  if ((_mkProgRules[issue]||[]).includes(val)) return 'progress';
  return 'progress'; // 默认走待跟进
}

const _mkClsColor = {
  'nofb':    {bg:'#f8fafc', bd:'#e2e8f0', fg:'#64748b', label:'未反馈'},
  'keep':    {bg:'#ecfdf5', bd:'#a7f3d0', fg:'#059669', label:'可保留'},
  'progress':{bg:'#fffbeb', bd:'#fde68a', fg:'#d97706', label:'待跟进'},
  'offline': {bg:'#fef2f2', bd:'#fecaca', fg:'#dc2626', label:'计划下线'},
  'missing': {bg:'#eff6ff', bd:'#bfdbfe', fg:'#2563eb', label:'数据缺失'}
};
const _mkIssueColor = {'经营模式':'#c07064','货盘':'#c09e64','基建-商户号':'#6a9ab8','基建-门店':'#7c7ef0'};
const _mkIssues = ['经营模式','货盘','基建-商户号','基建-门店'];
const _mkClasses = ['nofb','keep','progress','offline','missing'];

// 聚合: {issue: {cls: [{bid, name, sp, reason, metric}, ...]}}
function _mkBuildMatrix(){
  const matrix = {};
  _mkIssues.forEach(iss => {
    matrix[iss] = {nofb:[], keep:[], progress:[], offline:[], missing:[]};
  });
  // SCR: 从 BS 实时计算（不再依赖 sop_snapshot）
  const SCR = (function(){
    const result=[];
    (BS||[]).forEach(b=>{
      if(b.tierManual!=='腰部')return;
      if(b.statusManual!=='在线')return;
      if(b.onlineToday!==true)return;
      const issues=[];
      if(b.bizOk===false) issues.push('经营模式');
      if(b.priceOk===false) issues.push('货盘');
      if(b.infraOk===false) issues.push('基建-商户号');
      if(b.trafficOk===false) issues.push('基建-门店');
      if(!issues.length)return;
      result.push({
        brandId:b.brandId, name:b.name, sp:b.spMapped||'', owner:b.owner||'',
        assistant:b.assistant||'', cat4:b.cat4||'', isAlive:b.isAlive,
        storeCount:b.storeCount, dailyTx:b.dailyTx, txPerStore:b.txPerStore,
        miniApp:b.miniApp, priceForce:b.priceForce, storeComplete:b.storeComplete,
        issues:issues
      });
    });
    return result;
  })();
  const _bsMap = {};
  (BS||[]).forEach(x => { if (x && x.brandId != null) _bsMap[String(x.brandId)] = x; });

  // 已在 SCR 中的品牌（按原逻辑分类: keep/progress/nofb/offline）
  const seenBids = new Set();
  SCR.forEach(b => {
    // 过滤: 腰部×跟进在线×日报在线 (不再筛 cat4, 和 Tab0 对齐)
    const bs = _bsMap[String(b.brandId)];
    if (!bs) return;
    if (bs.tierManual !== '腰部') return;
    if (bs.statusManual !== '在线') return;
    if (bs.onlineToday !== true) return;

    seenBids.add(String(b.brandId));
    (b.issues||[]).forEach(iss => {
      if (!_mkIssues.includes(iss)) return;
      const fkey = _mkIssue2Field[iss];
      const val = (_fbCache[b.brandId+'_'+fkey]||'').trim();
      const cls = _mkClassify(iss, val);
      let metric = '';
      if (iss === '经营模式') metric = b.miniApp != null ? '小程序 '+b.miniApp.toFixed(1)+'%' : '—';
      else if (iss === '货盘') metric = b.priceForce != null ? '价格力 '+(b.priceForce>0?'+':'')+b.priceForce.toFixed(2)+'%' : '—';
      else if (iss === '基建-商户号') metric = b.txPerStore != null ? '1店几笔 '+b.txPerStore.toFixed(1) : '—';
      else if (iss === '基建-门店') metric = b.storeComplete != null ? '完整度 '+b.storeComplete.toFixed(1)+'%' : '—';
      matrix[iss][cls].push({bid:b.brandId, name:b.name, sp:b.sp, reason:val, metric:metric});
    });
  });

  // 数据缺失: 从 BS 里扫 符合口径 但四要素任一为 null 的品牌
  (BS||[]).forEach(b => {
    if (b.tierManual !== '腰部') return;
    if (b.statusManual !== '在线') return;
    if (b.onlineToday !== true) return;
    if (seenBids.has(String(b.brandId))) return; // 已被 SCR 归类的跳过

    // 检查每个维度是否 null，只把 null 的维度归 missing
    const dimsNull = [];
    if (b.bizOk == null) dimsNull.push(['经营模式', (b.miniApp != null && !Number.isNaN(b.miniApp)) ? '小程序 '+b.miniApp.toFixed(1)+'%' : '数据缺失']);
    if (b.priceOk == null) dimsNull.push(['货盘', (b.priceForce != null && !Number.isNaN(b.priceForce)) ? '价格力 '+(b.priceForce>0?'+':'')+b.priceForce.toFixed(2)+'%' : '数据缺失']);
    if (b.infraOk == null) dimsNull.push(['基建-商户号', (b.txPerStore != null && !Number.isNaN(b.txPerStore)) ? '1店几笔 '+b.txPerStore.toFixed(1) : '数据缺失']);
    if (b.trafficOk == null) dimsNull.push(['基建-门店', (b.storeComplete != null && !Number.isNaN(b.storeComplete)) ? '完整度 '+b.storeComplete.toFixed(1)+'%' : '数据缺失']);
    if (!dimsNull.length) return;
    dimsNull.forEach(pair => {
      const iss = pair[0], metric = pair[1];
      matrix[iss].missing.push({bid:b.brandId, name:b.name, sp:b.spMapped, reason:'(数据缺失)', metric:metric});
    });
  });

  return matrix;
}

function rfcmark(){
  const el = document.getElementById('fcMarkMatrix');
  if (!el) return;
  const M = _mkBuildMatrix();

  // 各分类总数 (不论维度)
  const clsCount = {keep:0, nofb:0, offline:0, progress:0};
  _mkIssues.forEach(iss => _mkClasses.forEach(cls => { clsCount[cls] += M[iss][cls].length; }));

  // 一级 tab 顺序: 可保留 / 未反馈 / 计划下线 / 整改中 (按你要求)
  const tier1 = ['keep','nofb','missing','progress','offline'];

  // 新出现 highlight: keep 之外任一 > 0
  const hasAbnormal = (clsCount.nofb + clsCount.offline + clsCount.progress) > 0;

  let h = '';
  // ===== 一级 tab: 固定 4 分类 =====
  h += '<div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;flex-wrap:wrap">';
  tier1.forEach(cls => {
    const cc = _mkClsColor[cls];
    const active = _markExpanded.activeClass === cls;
    const isHl = cls !== 'keep' && cls !== 'missing' && clsCount[cls] > 0;
    h += '<button onclick="_mkPickCls(\''+cls+'\')" style="padding:6px 14px;border-radius:6px;font-size:12px;cursor:pointer;border:'+(isHl?'2px':'1px')+' solid '+(active?cc.fg:(isHl?cc.fg:cc.bd))+';background:'+(active?cc.bg:(isHl?cc.bg:'#fff'))+';color:'+(active?cc.fg:(isHl?cc.fg:'#475569'))+';font-weight:'+(active||isHl?'700':'500')+';position:relative">'+cc.label+' <b>'+clsCount[cls]+'</b>'+(isHl?'<span style="position:absolute;top:-4px;right:-4px;width:8px;height:8px;background:'+cc.fg+';border-radius:50%;border:2px solid #fff"></span>':'')+'</button>';
  });
  if (hasAbnormal){
    h += '<span style="margin-left:6px;padding:4px 10px;background:#fef3c7;border-radius:12px;font-size:11px;color:#92400e;font-weight:600">⚠️ 非"可保留"分类有数据，需跟进</span>';
  }
  h += '</div>';

  const curCls = _markExpanded.activeClass || 'keep';
  const cc = _mkClsColor[curCls];

  // ===== 二级 tab: 四要素维度 (当前分类下有数据的) =====
  const issuesWithData = _mkIssues.filter(iss => M[iss][curCls].length > 0);
  if (!issuesWithData.length){
    h += '<div style="padding:30px;text-align:center;color:#94a3b8;font-size:12px;background:#f8fafc;border-radius:8px">当前分类「'+cc.label+'」下无数据</div>';
    el.innerHTML = h;
    return;
  }
  // 默认激活第一个有数据的维度（如果当前维度在此分类下没数据就切回）
  if (!_markExpanded.activeIssue || M[_markExpanded.activeIssue][curCls].length === 0){
    _markExpanded.activeIssue = issuesWithData[0];
  }
  h += '<div style="display:flex;align-items:center;gap:6px;margin-bottom:12px;flex-wrap:wrap;padding-left:4px">';
  h += '<span style="font-size:11px;color:#64748b;margin-right:4px">维度：</span>';
  issuesWithData.forEach(iss => {
    const n = M[iss][curCls].length;
    const active = _markExpanded.activeIssue === iss;
    const ic = _mkIssueColor[iss];
    h += '<button onclick="_mkPickIssue(\''+iss+'\')" style="padding:5px 10px;border-radius:6px;font-size:11px;cursor:pointer;border:1px solid '+(active?ic:'#cbd5e1')+';background:'+(active?ic+'15':'#fff')+';color:'+(active?ic:'#475569')+';font-weight:'+(active?'700':'500')+'">'+iss+' <b>'+n+'</b></button>';
  });
  h += '</div>';

  // ===== 三级内容: 按反馈原因分组 → 按服务商聚合品牌 =====
  const curIss = _markExpanded.activeIssue;
  const items = M[curIss][curCls];
  const byReason = {};
  items.forEach(it => {
    const r = it.reason || '(未填)';
    if (!byReason[r]) byReason[r] = [];
    byReason[r].push(it);
  });
  const reasons = Object.keys(byReason).sort((a,b) => byReason[b].length - byReason[a].length);

  h += '<div style="display:flex;flex-direction:column;gap:10px">';
  reasons.forEach(reason => {
    const brands = byReason[reason];
    // 按服务商分组
    const bySp = {};
    brands.forEach(b => {
      const sp = b.sp || '(未知服务商)';
      if (!bySp[sp]) bySp[sp] = [];
      bySp[sp].push(b);
    });
    const spList = Object.keys(bySp).sort((a,b) => bySp[b].length - bySp[a].length);

    // 默认激活第一个服务商
    const reasonKey = curCls + '|' + curIss + '|' + reason;
    let curSp = _markExpanded.activeSp[reasonKey];
    if (!curSp || !bySp[curSp]) curSp = spList[0];

    h += '<div style="border:1px solid '+cc.bd+';border-radius:8px;overflow:hidden">';
    // 原因标题
    h += '<div style="padding:8px 12px;background:'+cc.bg+';display:flex;align-items:center;justify-content:space-between">' +
         '<div style="font-size:12px;font-weight:700;color:'+cc.fg+'">'+reason+'</div>' +
         '<div style="font-size:11px;color:'+cc.fg+';font-weight:600">'+brands.length+' 家</div>' +
         '</div>';
    // 服务商 tab 行
    const spKeyEsc = reasonKey.replace(/'/g, "\\'");
    h += '<div style="background:#fff;padding:10px 12px">';
    h += '<div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px">';
    spList.forEach(sp => {
      const active = sp === curSp;
      const n = bySp[sp].length;
      h += '<button onclick="_mkPickSp(\''+spKeyEsc+'\',\''+sp.replace(/'/g,"\\\'")+'\')" style="padding:4px 10px;border-radius:5px;font-size:11px;cursor:pointer;border:1px solid '+(active?cc.fg:'#e2e8f0')+';background:'+(active?cc.bg:'#f8fafc')+';color:'+(active?cc.fg:'#475569')+';font-weight:'+(active?'700':'500')+'">'+sp+' <b>'+n+'</b></button>';
    });
    h += '</div>';
    // 当前服务商下的品牌列表
    h += '<div style="font-size:12px;color:#475569;line-height:1.8;padding-left:2px">' +
      bySp[curSp].map(b => '<span style="white-space:nowrap;color:#1e293b">'+b.name+'<span style="color:#94a3b8">（'+b.bid+'）</span></span>').join('<span style="color:#cbd5e1;margin:0 6px">·</span>') +
    '</div>';
    h += '</div>';
    h += '</div>';
  });
  h += '</div>';

  el.innerHTML = h;
}

function _mkPickCls(c){
  _markExpanded.activeClass = c;
  _markExpanded.activeIssue = null; // 切分类时重置维度
  rfcmark();
}
function _mkPickIssue(iss){
  _markExpanded.activeIssue = iss;
  rfcmark();
}
function _mkPickSp(reasonKey, sp){
  _markExpanded.activeSp[reasonKey] = sp;
  rfcmark();
}

// ========== Tab 1 · B-1 · 达标商户置顶总览 4 卡 ==========
function rpin(){
  const el = document.getElementById('pinKg');
  if (!el) return;
  const TR = (window._D && window._D.topRecords) || [];
  const topBids = new Set(TR.map(r => String(r.brand_id)));
  const TOP_QUOTA = 50;

  // 口径与 A-1 对齐：腰部 × 跟进在线 × 日报在线 (不筛 cat4)
  const online = (BS||[]).filter(b =>
    b.tierManual === '腰部' && b.statusManual === '在线' && b.onlineToday === true
  );
  // 达标 = 系统全达标 OR 人工打标
  const hasMark = function(b){
    const bid = b.brandId;
    if (!bid) return false;
    return !!(_fbCache[bid+'_screen_biz'] || _fbCache[bid+'_screen_price']
           || _fbCache[bid+'_screen_infra'] || _fbCache[bid+'_screen_store']);
  };
  const isPass = b => (b.bizOk===true && b.priceOk===true && b.infraOk===true && b.trafficOk===true) || hasMark(b);

  // 已置顶（以 topBids 为准, 50 坑位限制）
  // 已置顶 & 在线：以 brand_snapshot.online_today 为准（不筛 tier/status，置顶名单本身就是最严过滤）
  const _bsMapAll = {};
  (BS||[]).forEach(b => { if (b && b.brandId != null) _bsMapAll[String(b.brandId)] = b; });
  const pinnedOnline = Array.from(topBids).filter(bid => {
    const b = _bsMapAll[bid];
    return b && b.onlineToday === true;
  }).map(bid => _bsMapAll[bid]);
  // 已置顶 & 不在线：topRecords 里有但 BS 当日 online_today 不是 true
  const pinnedOfflineBids = Array.from(topBids).filter(bid => {
    const b = _bsMapAll[bid];
    return !b || b.onlineToday !== true;
  });
  const pinnedTotal = topBids.size;

  const pinPct = TOP_QUOTA > 0 ? (pinnedTotal / TOP_QUOTA * 100) : 0;
  const pinBarHtml = '<div style="margin-top:10px"><div style="height:6px;background:#e2e8f0;border-radius:3px;overflow:hidden"><div style="height:100%;width:'+Math.min(pinPct,100).toFixed(1)+'%;background:linear-gradient(90deg,#10b981,#059669);transition:width .4s"></div></div><div style="font-size:11px;color:#64748b;margin-top:4px">占用 <b style="color:#059669">'+pinnedTotal+' / '+TOP_QUOTA+'</b> · 在线 <b style="color:#059669">'+pinnedOnline.length+'</b> · 不在线 <b style="color:#dc2626">'+pinnedOfflineBids.length+'</b> <span style="color:#94a3b8">（曝光&lt;100）</span></div></div>';

  // 未置顶 = 候补补位池：达标 & 未置顶
  const passUnpinned = online.filter(b => isPass(b) && !topBids.has(String(b.brandId)));

  const card = function(label, icon, value, unit, sub, color){
    return '<div style="background:#fff;border:1px solid #e5e7eb;border-radius:10px;padding:16px 18px">' +
      '<div style="font-size:12px;color:#64748b;font-weight:600">'+icon+' '+label+'</div>' +
      '<div style="font-size:32px;font-weight:800;color:'+(color||'#1e293b')+';margin-top:6px;line-height:1.1">' +
        value + (unit ? '<span style="font-size:14px;color:#94a3b8;font-weight:500;margin-left:4px">'+unit+'</span>' : '') +
      '</div>' + (sub||'') +
    '</div>';
  };

  // 顶部 2 大卡（均匀分布）
  let html = '';
  html += card('已置顶', '🎯', pinnedTotal,   '家', pinBarHtml, '#059669');
  html += card('未置顶', '⏳', passUnpinned.length, '家', '<div style="font-size:11px;color:#94a3b8;margin-top:6px">候补补位池 · 50 名额限制</div>', '#0891b2');
  el.innerHTML = html;
}

// ========== Tab 1 · B-2 · 置顶流量象限图 ==========
var _pinChart = null;
var _pinDataSource = 'realtime';
function _pinRenderDsTabs(){} // no-op, mock tab removed
function _pinSwitchDs(k){}

// 计算日均老客尽曝 (X 轴数值) - 根据数据源
function _pinCalcX(b, dataSource, trendRows){
  // 公式: (7日高频尽曝UV + 7日低频尽曝UV) / 7 / 日均交易笔数
  const hi = (typeof b.hiExpUV_all === 'number' ? b.hiExpUV_all : null);
  const lo = (typeof b.loExpUV_all === 'number' ? b.loExpUV_all : null);
  if ((hi == null || hi === 0) && (lo == null || lo === 0)) return null;
  const avg7 = ((hi||0) + (lo||0)) / 7;
  const tx = b.dailyTx;
  if (tx == null || tx <= 0) return null;
  return avg7 / (tx * 10000);  // dailyTx 单位是"万笔"
}

function _median(arr){
  if (!arr.length) return 0;
  const s = [...arr].sort((a,b)=>a-b);
  const m = Math.floor(s.length/2);
  return s.length % 2 ? s[m] : (s[m-1]+s[m])/2;
}

function rpinq(){
  const el = document.getElementById('pinQuadrant');
  if (!el) return;
  _pinRenderDsTabs();

  const TR = (window._D && window._D.topRecords) || [];
  const trendRows = (window._D && window._D.trendRows) || [];
  const topBids = new Set(TR.map(r => String(r.brand_id)));

  // 象限图筛选器
  const qFiltAlive = (document.getElementById('pinQFiltAlive')||{}).value || '';
  const qFiltSP = (document.getElementById('pinQFiltSP')||{}).value || '';

  // 填充服务商下拉（只填一次）
  const qSpSel = document.getElementById('pinQFiltSP');
  if (qSpSel && qSpSel.options.length <= 1){
    const sps = Array.from(new Set((BS||[]).filter(b => topBids.has(String(b.brandId))).map(b => b.spMapped).filter(Boolean))).sort();
    sps.forEach(v => { const o=document.createElement('option'); o.value=v; o.textContent=v; qSpSel.appendChild(o) });
  }

  // 口径：腰部 × 跟进在线 × 日报在线 × 已置顶 (不筛 cat4, 和 Tab0/A-1 一致)
  const online = (BS||[]).filter(b =>
    b.tierManual === '腰部' && b.statusManual === '在线' && b.onlineToday === true
  );
  let pinnedOnline = online.filter(b => topBids.has(String(b.brandId)));

  // 应用象限图筛选
  if (qFiltAlive === 'alive') pinnedOnline = pinnedOnline.filter(b => b.isAlive === true);
  if (qFiltAlive === 'dead') pinnedOnline = pinnedOnline.filter(b => b.isAlive === false);
  if (qFiltSP) pinnedOnline = pinnedOnline.filter(b => b.spMapped === qFiltSP);

  // 计算每个品牌 (x, y)
  const points = [];
  pinnedOnline.forEach(b => {
    const x = _pinCalcX(b, _pinDataSource, trendRows);
    const y = b.visitUseRate;
    if (x == null || y == null) return;
    // 气泡大小 = 日均核销 PV (use_pv 或 actByBrand 合计)
    const usePv = b.usePv || ((b.biz_useD||0)+(b.f2f_useD||0)+(b.fix_useD||0)+(b.nb_useD||0)+(b.zfyl_useD||0));
    points.push({name: b.name, bid: b.brandId, sp: b.spMapped, x: x, y: y, b: b, size: usePv});
  });

  // 去掉顶部 alert（移入空态显示）
  const alert = document.getElementById('pinQuadrantAlert');
  if (alert){ alert.style.display = 'none'; alert.innerHTML = ''; }

  const emptyEl = document.getElementById('pinQuadrantEmpty');

  if (points.length === 0){
    if (typeof echarts !== 'undefined' && _pinChart){ _pinChart.dispose(); _pinChart = null; }
    if (emptyEl){ emptyEl.style.display = 'none'; }
    el.innerHTML =
      '<div style="display:flex;align-items:center;justify-content:center;height:100%;padding:20px">' +
        '<div style="max-width:640px;background:#fef2f2;border:2px solid #fca5a5;border-radius:10px;padding:22px 26px;color:#991b1b;line-height:1.8;box-shadow:0 4px 12px rgba(239,68,68,0.12)">' +
          '<div style="font-size:15px;font-weight:800;margin-bottom:10px">❗️ 暂无可用数据点（已置顶品牌 '+pinnedOnline.length+' 家，当前无老客尽曝UV数据）</div>' +
          '<div style="font-size:12.5px"><b>说明：</b>X轴使用7日累计尽曝UV÷7估算，若该字段也为空则无法绘制。</div>' +
        '</div>' +
      '</div>';
    return;
  }
  if (emptyEl){ emptyEl.style.display = 'none'; }

  // X轴中位数（动态），Y轴固定阈值40%（中位数仅参考）
  const xMed = _median(points.map(p=>p.x));
  const yThreshold = 40; // 到店核销率固定阈值
  const yMedRef = _median(points.map(p=>p.y)); // 中位数仅展示参考

  // 四象限分类（Y轴用固定阈值40%）
  const cls = function(p){
    if (p.x >= xMed && p.y >= yThreshold) return 'A'; // 健康
    if (p.x >= xMed && p.y <  yThreshold) return 'B'; // 有量低核销
    if (p.x <  xMed && p.y >= yThreshold) return 'C'; // 高核销缺量
    return 'D'; // 双低
  };
  const color = {A:'#059669', B:'#d97706', C:'#2563eb', D:'#dc2626'};
  const groups = {A:[], B:[], C:[], D:[]};
  // 气泡大小归一化: 按 size 的百分位缩放到 8-30
  const sizes = points.map(p => p.size||0).filter(s => s > 0);
  const maxSize = sizes.length ? Math.max.apply(null, sizes) : 1;
  points.forEach(p => {
    // 带 size 字段给 ECharts symbolSize 用
    const sizePx = p.size > 0 ? (8 + Math.sqrt(p.size/maxSize) * 22) : 8;
    groups[cls(p)].push([p.x, p.y, p.name, p.sp, p.bid, p.size||0, sizePx]);
  });

  if (typeof echarts === 'undefined'){
    el.innerHTML = '<div style="color:#dc2626;padding:20px">ECharts 未加载</div>';
    return;
  }
  if (_pinChart){ _pinChart.dispose(); }
  el.innerHTML = '';
  _pinChart = echarts.init(el);
  _pinChart.setOption({
    grid: {left: 60, right: 100, top: 30, bottom: 50},
    tooltip: {
      trigger: 'item',
      formatter: function(p){
        const d = p.data;
        return '<b>'+d[2]+'</b><br>服务商: '+d[3]+
               '<br>老客曝光占比: <b>'+(d[0]*100).toFixed(2)+'%</b>'+
               '<br>到店核销率: <b>'+d[1].toFixed(2)+'%</b>'+
               '<br>日均核销: <b>'+(d[5]>=10000?(d[5]/10000).toFixed(1)+'w':Math.round(d[5]))+'</b>';
      }
    },
    xAxis: {
      type: 'value',
      name: '老客曝光占比（日均老客尽曝PV/日均交易）',
      nameLocation: 'middle',
      nameGap: 28,
      nameTextStyle: {fontSize: 11, color: '#64748b'},
      axisLabel: {fontSize: 10, color: '#64748b', formatter: function(v){return (v*100).toFixed(1)+'%'}},
      splitLine: {lineStyle: {color: '#e2e8f0', type: 'dashed'}}
    },
    yAxis: {
      type: 'value',
      name: '到店核销率 %',
      nameLocation: 'middle',
      nameGap: 42,
      nameTextStyle: {fontSize: 11, color: '#64748b'},
      axisLabel: {fontSize: 10, color: '#64748b', formatter: '{value}%'},
      splitLine: {lineStyle: {color: '#e2e8f0', type: 'dashed'}}
    },
    series: [
      {name:'A 健康',          type:'scatter',
       symbolSize: function(v){return v[6]},
       itemStyle:{color:color.A, opacity:0.65}, data: groups.A,
       markLine: {silent:true, symbol:'none', lineStyle:{color:'#94a3b8', type:'dashed', width:1},
         data: [
           {xAxis: xMed, label:{show:true, position:'end', formatter:function(){return 'X中位 '+(xMed*100).toFixed(1)+'%'}, fontSize:9, color:'#64748b'}},
           {xAxis: 1.0, label:{show:true, position:'end', formatter:'目标 100%', fontSize:9, color:'#dc2626'}, lineStyle:{color:'#dc2626', type:'solid', width:1}},
           {yAxis: yThreshold, label:{show:true, position:'insideEndTop', formatter:'阈值 '+yThreshold+'%', fontSize:9, color:'#dc2626', padding:[0,0,0,4]}, lineStyle:{color:'#dc2626', type:'solid', width:1}},
           {yAxis: yMedRef, label:{show:true, position:'insideEndBottom', formatter:function(){return 'Y中位 '+yMedRef.toFixed(1)+'%'}, fontSize:9, color:'#94a3b8', padding:[0,0,0,4]}, lineStyle:{color:'#94a3b8', type:'dashed', width:1}}
         ]}},
      {name:'B 有量低核销',    type:'scatter', symbolSize: function(v){return v[6]}, itemStyle:{color:color.B, opacity:0.65}, data: groups.B},
      {name:'C 高核销缺量',    type:'scatter', symbolSize: function(v){return v[6]}, itemStyle:{color:color.C, opacity:0.65}, data: groups.C},
      {name:'D 双低',          type:'scatter', symbolSize: function(v){return v[6]}, itemStyle:{color:color.D, opacity:0.65}, data: groups.D}
    ],
    legend: {
      top: 2, right: 10,
      textStyle: {fontSize: 11, color: '#475569'},
      icon: 'circle', itemWidth: 10, itemHeight: 10,
      data: [
        {name:'A 健康 ('+groups.A.length+')'},
        {name:'B 有量低核销 ('+groups.B.length+')'},
        {name:'C 高核销缺量 ('+groups.C.length+')'},
        {name:'D 双低 ('+groups.D.length+')'}
      ]
    }
  });
  // 同步绑 resize
  if (!window._pinResizeBound){
    window._pinResizeBound = true;
    window.addEventListener('resize', function(){ if (_pinChart) _pinChart.resize() });
  }
  // 保存 points 供搜索高亮使用
  window._pinChartPoints = points;
  // 如果已有搜索词，应用高亮
  _pinQSearchHighlight();
}

// 象限图品牌搜索高亮
function _pinQSearchHighlight() {
  if (!_pinChart || !window._pinChartPoints) return;
  const q = ((document.getElementById('pinQSearch')||{}).value || '').trim().toLowerCase();
  if (!q) {
    // 清除高亮 —— 恢复所有点的默认透明度
    _pinChart.dispatchAction({ type: 'downplay', seriesIndex: [0,1,2,3] });
    return;
  }
  // 查找匹配的品牌
  const matched = window._pinChartPoints.filter(p =>
    p.name.toLowerCase().includes(q) || String(p.bid).includes(q)
  );
  if (matched.length === 0) return;

  // 先 downplay 所有，再 highlight 匹配的
  _pinChart.dispatchAction({ type: 'downplay', seriesIndex: [0,1,2,3] });

  // 找到匹配点在各 series 中的 dataIndex
  const option = _pinChart.getOption();
  const seriesData = option.series.map(s => s.data);
  matched.forEach(mp => {
    for (let si = 0; si < seriesData.length; si++) {
      const idx = seriesData[si].findIndex(d => d[2] === mp.name && d[4] === mp.bid);
      if (idx >= 0) {
        _pinChart.dispatchAction({ type: 'highlight', seriesIndex: si, dataIndex: idx });
        // 同时显示 tooltip
        if (matched.length === 1) {
          _pinChart.dispatchAction({ type: 'showTip', seriesIndex: si, dataIndex: idx });
        }
      }
    }
  });
}
var _pinActiveBrand = null; // 当前选中的 brand_id
var _pinActiveQuad = null;  // 当前象限筛选 'A'|'B'|'C'|'D'|'U'|null
function _pinFilterChanged(){ _pinActiveBrand = null; rpinc(); }
function _pinQuadCls(x, y, xMed, yMed){
  if (x >= xMed && y >= yMed) return 'A';
  if (x >= xMed && y <  yMed) return 'B';
  if (x <  xMed && y >= yMed) return 'C';
  return 'D';
}
function rpinc(){
  const body = document.getElementById('pinCardBody');
  const tabs = document.getElementById('pinCardTabs');
  if (!body || !tabs) return;

  const TR = (window._D && window._D.topRecords) || [];
  const trendRows = (window._D && window._D.trendRows) || [];
  const topBids = new Set(TR.map(r => String(r.brand_id)));

  // 读取象限图同款筛选器（共享）
  const qFiltAlive = (document.getElementById('pinQFiltAlive')||{}).value || '';
  const qFiltSP = (document.getElementById('pinQFiltSP')||{}).value || '';

  const online = (BS||[]).filter(b =>
    b.tierManual === '腰部' && b.statusManual === '在线' && b.onlineToday === true
  );
  let pinnedOnline = online.filter(b => topBids.has(String(b.brandId)));

  // 应用象限图筛选（与象限图联动）
  if (qFiltAlive === 'alive') pinnedOnline = pinnedOnline.filter(b => b.isAlive === true);
  if (qFiltAlive === 'dead') pinnedOnline = pinnedOnline.filter(b => b.isAlive === false);
  if (qFiltSP) pinnedOnline = pinnedOnline.filter(b => b.spMapped === qFiltSP);

  // 先算象限 (跟 rpinq 一致)
  const pts = pinnedOnline.map(b => {
    const x = _pinCalcX(b, _pinDataSource, trendRows);
    const y = b.visitUseRate;
    return {b: b, x: x, y: y};
  });
  const valid = pts.filter(p => p.x != null && p.y != null);
  const xMed = _median(valid.map(p => p.x));
  const yMed = 40; // 到店核销率固定阈值，与象限图一致
  const quadOf = {};
  pts.forEach(p => {
    if (p.x == null || p.y == null) quadOf[p.b.brandId] = 'U';
    else quadOf[p.b.brandId] = _pinQuadCls(p.x, p.y, xMed, yMed);
  });
  const byQuad = {A:0,B:0,C:0,D:0,U:0};
  pinnedOnline.forEach(b => byQuad[quadOf[b.brandId]]++);
  window._pinQuadOfCache = quadOf; // 供 _pinBuildCard 读取

  // 填 服务商/负责人 下拉
  const spSel = document.getElementById('pinFiltSP');
  const ownerSel = document.getElementById('pinFiltOwner');
  if (spSel && spSel.options.length <= 1){
    const sps = Array.from(new Set(pinnedOnline.map(b => b.spMapped).filter(Boolean))).sort();
    sps.forEach(v => { const o=document.createElement('option'); o.value=v; o.textContent=v; spSel.appendChild(o) });
  }
  if (ownerSel && ownerSel.options.length <= 1){
    const owners = Array.from(new Set(pinnedOnline.map(b => b.owner).filter(Boolean))).sort();
    owners.forEach(v => { const o=document.createElement('option'); o.value=v; o.textContent=v; ownerSel.appendChild(o) });
  }
  const catSel = document.getElementById('pinFiltCat');
  if (catSel && catSel.options.length <= 1){
    const cats = Array.from(new Set(pinnedOnline.map(b => b.cat4).filter(Boolean))).sort();
    cats.forEach(v => { const o=document.createElement('option'); o.value=v; o.textContent=v; catSel.appendChild(o) });
  }

  // 读筛选器
  const fQ = ((document.getElementById('pinSearch')||{}).value || '').toLowerCase().trim();
  const fSP = (document.getElementById('pinFiltSP')||{}).value || '';
  const fOwner = (document.getElementById('pinFiltOwner')||{}).value || '';
  const fAlive = (document.getElementById('pinFiltAlive')||{}).value || '';
  const fCat = (document.getElementById('pinFiltCat')||{}).value || '';

  let list = pinnedOnline.filter(b => {
    // 象限过滤
    if (_pinActiveQuad && quadOf[b.brandId] !== _pinActiveQuad) return false;
    if (fSP && b.spMapped !== fSP) return false;
    if (fOwner && b.owner !== fOwner) return false;
    if (fAlive === 'alive' && b.isAlive !== true) return false;
    if (fAlive === 'dead' && b.isAlive !== false) return false;
    if (fCat && b.cat4 !== fCat) return false;
    if (fQ){
      const nm = (b.name||'').toLowerCase();
      const bid = String(b.brandId||'');
      if (!nm.includes(fQ) && !bid.includes(fQ)) return false;
    }
    return true;
  });

  // 象限 tab + 总数
  const quadLabels = {A:'🟢 健康', B:'🟠 有量低核销', C:'🔵 高核销缺量', D:'🔴 双低', U:'⚪️ 未定'};
  const quadKeys = ['A','B','C','D','U'].filter(k => byQuad[k] > 0);
  let tabsHtml = '<button onclick="_pinPickQuad(null)" style="padding:5px 10px;border-radius:6px;font-size:11px;cursor:pointer;border:1px solid '+(_pinActiveQuad==null?'#2563eb':'#cbd5e1')+';background:'+(_pinActiveQuad==null?'#eff6ff':'#fff')+';color:'+(_pinActiveQuad==null?'#1d4ed8':'#475569')+';font-weight:'+(_pinActiveQuad==null?'700':'500')+'">全部 ('+pinnedOnline.length+')</button>';
  tabsHtml += quadKeys.map(k =>
    '<button onclick="_pinPickQuad(\''+k+'\')" style="padding:5px 10px;border-radius:6px;font-size:11px;cursor:pointer;border:1px solid '+(_pinActiveQuad===k?'#2563eb':'#cbd5e1')+';background:'+(_pinActiveQuad===k?'#eff6ff':'#fff')+';color:'+(_pinActiveQuad===k?'#1d4ed8':'#475569')+';font-weight:'+(_pinActiveQuad===k?'700':'500')+'">'+quadLabels[k]+' ('+byQuad[k]+')</button>'
  ).join('');
  tabsHtml += '<span style="font-size:11px;color:#64748b;padding:4px 8px;align-self:center">· 当前筛选 <b style="color:#1e293b">'+list.length+'</b> / '+pinnedOnline.length+'</span>';
  tabs.innerHTML = tabsHtml;

  if (!_pinActiveBrand || !list.find(b => String(b.brandId) === String(_pinActiveBrand))){
    _pinActiveBrand = list.length ? list[0].brandId : null;
  }

  const cur = list.find(b => String(b.brandId) === String(_pinActiveBrand));
  if (!cur){
    body.innerHTML = '<div style="padding:40px;text-align:center;color:#94a3b8;font-size:12px">无匹配品牌</div>';
    return;
  }

  body.innerHTML =
    '<div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:8px;border-bottom:1px solid #e2e8f0;margin-bottom:12px;scrollbar-width:thin">' +
    list.map(b => {
      const active = String(b.brandId) === String(_pinActiveBrand);
      return '<button onclick="_pinPickBrand(\''+b.brandId+'\')" style="white-space:nowrap;padding:5px 10px;border-radius:6px;font-size:11px;cursor:pointer;border:1px solid '+(active?'#b45852':'#cbd5e1')+';background:'+(active?'#fef2f2':'#fff')+';color:'+(active?'#b45852':'#475569')+';font-weight:'+(active?'700':'500')+'">'+b.name+'</button>';
    }).join('') +
    '</div>' +
    _pinBuildCard(cur);
}

function _pinPickQuad(k){
  _pinActiveQuad = k;
  _pinActiveBrand = null;
  rpinc();
}
function _pinPickBrand(bid){
  _pinActiveBrand = bid;
  rpinc();
}

// 单个品牌卡（仿 KA 摇优惠）
function _pinBuildCard(b){
  const survChip = b.isAlive === true ?
    '<span style="background:#d1fae5;color:#065f46;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:600">✅ 存活</span>' :
    (b.isAlive === false ? '<span style="background:#fee2e2;color:#991b1b;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:600">⚠️ 未存活</span>' : '<span style="background:#e2e8f0;color:#475569;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:600">—</span>');
  // 象限分类标签
  const _q = window._pinQuadOfCache && window._pinQuadOfCache[b.brandId] || 'U';
  const _qColor = {A:'#059669',B:'#d97706',C:'#2563eb',D:'#dc2626',U:'#94a3b8'}[_q];
  const _qName = {A:'健康',B:'有量低核销',C:'高核销缺量',D:'双低',U:'未定'}[_q];
  const quadChip = '<span style="background:'+_qColor+'18;color:'+_qColor+';padding:2px 8px;border-radius:10px;font-size:11px;font-weight:600">'+_qName+'</span>';
  // 类目标签
  const catChip = b.cat4 ? '<span style="background:#f1f5f9;color:#475569;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:500">'+b.cat4+'</span>' : '';
  const head = '<div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;flex-wrap:wrap"><div style="font-size:18px;font-weight:800;color:#1e293b">'+b.name+'</div>'+survChip+quadChip+catChip+'</div>';

  // ① 结果指标 3 卡（无目标达成条）
  const daily_exp_w = b.expPv != null ? b.expPv : ((b.biz_expW||0)+(b.f2f_expW||0)+(b.fix_expW||0)+(b.nb_expW||0)+(b.zfyl_expW||0));
  const daily_use = ((b.biz_useD||0)+(b.f2f_useD||0)+(b.fix_useD||0)+(b.nb_useD||0)+(b.zfyl_useD||0));
  const eur = daily_exp_w > 0 ? (daily_use/(daily_exp_w*10000)*100) : null;
  const resultCard = function(title, val, color){
    return '<div style="background:#f8fafc;border-radius:8px;padding:14px"><div style="font-size:11px;color:#64748b;font-weight:600;margin-bottom:6px">'+title+'</div><div style="font-size:24px;font-weight:800;color:'+color+'">'+val+'</div></div>';
  };
  const resultSec = '<div style="margin-bottom:16px"><div style="font-size:12px;font-weight:700;color:#1e293b;margin-bottom:8px">📊 结果指标</div><div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px">'+
    resultCard('日均曝光',   daily_exp_w > 0 ? daily_exp_w.toFixed(1)+'w' : '—', '#2563eb') +
    resultCard('日均核销',   daily_use > 0 ? (daily_use>=10000 ? (daily_use/10000).toFixed(1)+'w' : daily_use.toLocaleString()) : '—', '#059669') +
    resultCard('曝光核销率', eur != null ? eur.toFixed(2)+'%' : '—', eur != null && eur < 0.4 ? '#dc2626' : '#d97706') +
    resultCard('存活率',     b.survivalRate != null ? b.survivalRate.toFixed(2)+'%' : '—', b.survivalRate != null && b.survivalRate < 1.0 ? '#dc2626' : '#059669') +
  '</div></div>';

  // ② 四要素检查 4 卡
  const fCard = function(title, val, ok){
    const bg = ok===true?'#f0fdf4':(ok===false?'#fef2f2':'#f8fafc');
    const bd = ok===true?'#86efac':(ok===false?'#fecaca':'#e2e8f0');
    const icon = ok===true?'✓':(ok===false?'✗':'—');
    const color = ok===true?'#059669':(ok===false?'#dc2626':'#64748b');
    return '<div style="background:'+bg+';border:1px solid '+bd+';border-radius:8px;padding:12px"><div style="font-size:11px;color:#475569;font-weight:600;margin-bottom:4px">'+title+' <span style="color:'+color+';font-weight:800">'+icon+'</span></div><div style="font-size:13px;font-weight:700;color:#1e293b">'+val+'</div></div>';
  };
  const fourSec = '<div style="margin-bottom:16px"><div style="font-size:12px;font-weight:700;color:#1e293b;margin-bottom:8px">🔲 上线前四要素检查</div><div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px">'+
    fCard('经营模式', b.miniApp != null ? '小程序 '+b.miniApp.toFixed(1)+'%' : '—', b.bizOk) +
    fCard('价格力',   b.priceForce != null ? (b.priceForce>0?'+':'')+b.priceForce.toFixed(2)+'%' : '—', b.priceOk) +
    fCard('基建-商户号', b.txPerStore != null ? '1店几笔 '+b.txPerStore.toFixed(1) : '—', b.infraOk) +
    fCard('<span style="cursor:help" title="= 审核通过门店数(品牌日报) / 真实门店数(周报) × 100">基建-门店</span>', b.storeComplete != null ? '完整度 '+b.storeComplete.toFixed(1)+'%' : '—', b.trafficOk) +
  '</div></div>';

  // ③ 上线后流量 · 分渠道
  const chn = [
    {key:'e21', name:'二选一', expW: (b.biz_expW||0)+(b.f2f_expW||0)+(b.fix_expW||0), useD: (b.biz_useD||0)+(b.f2f_useD||0)+(b.fix_useD||0)},
    {key:'zfyl', name:'支付有礼', expW: b.zfyl_expW||0, useD: b.zfyl_useD||0},
    {key:'nb',  name:'周边', expW: b.nb_expW||0, useD: b.nb_useD||0}
  ];
  const totalExpW = chn.reduce((s,c)=>s+c.expW, 0);
  const totalUseD = chn.reduce((s,c)=>s+c.useD, 0);
  const chnRows = chn.map(c => {
    const expPct = totalExpW > 0 ? (c.expW/totalExpW*100) : 0;
    const ur = c.expW > 0 ? (c.useD/(c.expW*10000)*100) : null;
    return '<tr>'+
      '<td style="padding:4px 8px;font-weight:600">'+c.name+'</td>'+
      '<td style="padding:4px 8px" class="nc">'+(c.expW>0?c.expW.toFixed(1)+'w':'—')+'</td>'+
      '<td style="padding:4px 8px" class="nc"><div style="display:flex;align-items:center;gap:6px"><div style="flex:1;height:6px;background:#e2e8f0;border-radius:3px;overflow:hidden;min-width:50px"><div style="height:100%;width:'+expPct.toFixed(1)+'%;background:#2563eb"></div></div><span style="font-size:10px;color:#475569">'+expPct.toFixed(1)+'%</span></div></td>'+
      '<td style="padding:4px 8px" class="nc">'+(c.useD>0?c.useD.toLocaleString():'—')+'</td>'+
      '<td style="padding:4px 8px" class="nc">'+(ur!=null?ur.toFixed(2)+'%':'—')+'</td>'+
    '</tr>';
  }).join('');
  const chnSec = '<div style="margin-bottom:16px"><div style="font-size:12px;font-weight:700;color:#1e293b;margin-bottom:8px">📈 上线后流量分析 · 分渠道对比</div><div style="overflow-x:auto"><table style="width:100%;font-size:11px;border-collapse:collapse"><thead><tr style="background:#f1f5f9;color:#475569"><th style="padding:5px 8px;text-align:left">渠道</th><th style="padding:5px 8px" class="nc">曝光量</th><th style="padding:5px 8px" class="nc" style="min-width:140px">曝光占比</th><th style="padding:5px 8px" class="nc">核销量</th><th style="padding:5px 8px" class="nc">核销率</th></tr></thead><tbody>'+chnRows+'</tbody></table></div></div>';

  // ④ 老客尽曝情况（简化: 单块 高频/低频）— 动态计算置顶品牌中位数并 highlight
  const hiExp = b.hiExpUV_all, loExp = b.loExpUV_all;
  const hiApp = b.hiAppUV_all, loApp = b.loAppUV_all;
  const hiRate = (hiApp != null && hiApp > 0 && hiExp != null) ? (hiExp/hiApp*100) : null;
  const loRate = (loApp != null && loApp > 0 && loExp != null) ? (loExp/loApp*100) : null;
  // 计算置顶50品牌中位数
  const _allPinnedBS = (BS||[]).filter(bb => {
    const _tr2 = (window._D && window._D.topRecords) || [];
    const _tbids = new Set(_tr2.map(r => String(r.brand_id)));
    return _tbids.has(String(bb.brandId)) && bb.onlineToday === true;
  });
  const _hiRates = _allPinnedBS.map(bb => bb.hiAppUV_all > 0 && bb.hiExpUV_all != null ? bb.hiExpUV_all/bb.hiAppUV_all*100 : null).filter(v => v != null);
  const _loRates = _allPinnedBS.map(bb => bb.loAppUV_all > 0 && bb.loExpUV_all != null ? bb.loExpUV_all/bb.loAppUV_all*100 : null).filter(v => v != null);
  const _e21Rates = _allPinnedBS.map(bb => bb.e21Ratio).filter(v => v != null);
  const _hiMed = _hiRates.length ? _median(_hiRates) : null;
  const _loMed = _loRates.length ? _median(_loRates) : null;
  const _e21Med = _e21Rates.length ? _median(_e21Rates) : null;
  const _hiLow = hiRate != null && _hiMed != null && hiRate < _hiMed;
  const _loLow = loRate != null && _loMed != null && loRate < _loMed;
  const _e21Low = b.e21Ratio != null && _e21Med != null && b.e21Ratio < _e21Med;
  const custSec = '<div style="margin-bottom:16px"><div style="font-size:12px;font-weight:700;color:#1e293b;margin-bottom:8px">🧍 老客尽曝情况 <span style="font-size:10px;color:#94a3b8;font-weight:400">中位数基于置顶50品牌</span></div><div style="background:#f8fafc;border-radius:8px;padding:12px;display:grid;grid-template-columns:repeat(3,1fr);gap:12px">'+
    '<div style="'+ (_hiLow?'background:#fef2f2;border-radius:6px;padding:6px':'') +'"><div style="font-size:11px;color:#64748b">高频应曝尽曝率</div><div style="font-size:18px;font-weight:700;color:'+(_hiLow?'#dc2626':(hiRate!=null?'#1e293b':'#94a3b8'))+'">'+(hiRate!=null?hiRate.toFixed(1)+'%':'—')+'</div>'+(_hiMed!=null?'<div style="font-size:10px;color:#94a3b8">中位 '+_hiMed.toFixed(1)+'%</div>':'')+'</div>'+
    '<div style="'+ (_loLow?'background:#fef2f2;border-radius:6px;padding:6px':'') +'"><div style="font-size:11px;color:#64748b">低频应曝尽曝率</div><div style="font-size:18px;font-weight:700;color:'+(_loLow?'#dc2626':(loRate!=null?'#1e293b':'#94a3b8'))+'">'+(loRate!=null?loRate.toFixed(1)+'%':'—')+'</div>'+(_loMed!=null?'<div style="font-size:10px;color:#94a3b8">中位 '+_loMed.toFixed(1)+'%</div>':'')+'</div>'+
    '<div style="'+ (_e21Low?'background:#fef2f2;border-radius:6px;padding:6px':'') +'"><div style="font-size:11px;color:#64748b;cursor:help" title="= (近7日_高频尽曝UV_二选一 + 低频尽曝UV_二选一) / 7 / 近7日均_曝光PV(w) / 10000&#10;&#10;底表: 品牌日报">二选一老客曝光占比</div><div style="font-size:18px;font-weight:700;color:'+(_e21Low?'#dc2626':(b.e21Ratio!=null?'#1e293b':'#94a3b8'))+'">'+(b.e21Ratio!=null?b.e21Ratio.toFixed(1)+'%':'—')+'</div>'+(_e21Med!=null?'<div style="font-size:10px;color:#94a3b8">中位 '+_e21Med.toFixed(1)+'%</div>':'')+'</div>'+
  '</div>'+
  (hiExp==null&&loExp==null ? '<div style="font-size:10px;color:#d97706;margin-top:6px">⚠️ 0420 起老客 UV 字段缺失，以上为 null</div>' : '') +
  '</div>';

  // ⑤ 到店核销 4 卡（置顶天数 + 到店核销率 + 领取到店率 + 未达门槛占比）
  // 置顶天数 = 日报日期 - 置顶时间(updated_at = G列)
  let _pinDays = null;
  const _TR = (window._D && window._D.topRecords) || [];
  const _trRec = _TR.find(r => String(r.brand_id) === String(b.brandId));
  const _pinTime = _trRec ? (_trRec.updated_at || _trRec.top_at) : null;
  if (_pinTime && window._D && window._D.final && window._D.final.dataDate) {
    const topDate = new Date(_pinTime);
    const reportDate = new Date(window._D.final.dataDate);
    _pinDays = Math.floor((reportDate - topDate) / (1000*60*60*24));
    if (_pinDays < 0) _pinDays = 0;
  }
  // 到店核销率：固定阈值40%判断，中位数仅参考展示
  const _vurRates = _allPinnedBS.map(bb => bb.visitUseRate).filter(v => v != null);
  const _vurMedRef = _vurRates.length ? _median(_vurRates) : null;
  const _vurThreshold = 40;
  const _vurLow = b.visitUseRate != null && b.visitUseRate < _vurThreshold;
  const _vurBg = _vurLow ? 'background:#fef2f2;border:1px solid #fecaca' : 'background:#f0fdf4;border:1px solid #bbf7d0';
  const _vurColor = _vurLow ? '#dc2626' : '#059669';
  // 领取到店率
  const _cvr = b.claimVisitRate;
  // 未达门槛占比：从活动数据聚合（按品牌加权平均，曝光加权）
  let _noThrRate = null;
  if (window._D && window._D.acts && window._D.acts.length > 0) {
    const brandActs = window._D.acts.filter(a => String(a.brandName) === b.name && a.noThresholdRate != null && a.expPV > 0);
    if (brandActs.length > 0) {
      const totalExp = brandActs.reduce((s,a) => s + (a.expPV||0), 0);
      _noThrRate = totalExp > 0 ? brandActs.reduce((s,a) => s + (a.noThresholdRate||0) * (a.expPV||0), 0) / totalExp : null;
    }
  }
  const _ntLow = _noThrRate != null && _noThrRate > 0.3;
  const _ntBg = _ntLow ? 'background:#fef2f2;border:1px solid #fecaca' : 'background:#f8fafc';
  const _ntColor = _ntLow ? '#dc2626' : '#1e293b';
  const visitSec = '<div style="margin-bottom:16px"><div style="font-size:12px;font-weight:700;color:#1e293b;margin-bottom:8px">🎯 到店核销</div><div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px">'+
    '<div style="background:#f8fafc;border-radius:8px;padding:12px"><div style="font-size:11px;color:#64748b;margin-bottom:4px">置顶天数</div><div style="font-size:20px;font-weight:800;color:#2563eb">'+(_pinDays != null ? _pinDays + '天' : '—')+'</div>'+ (_pinTime ? '<div style="font-size:10px;color:#94a3b8;margin-top:2px">'+_pinTime.substring(0,10)+'起</div>' : '') +'</div>'+
    '<div style="'+_vurBg+';border-radius:8px;padding:12px"><div style="font-size:11px;color:#64748b;margin-bottom:4px">到店核销率</div><div style="font-size:20px;font-weight:800;color:'+_vurColor+'">'+(b.visitUseRate!=null?b.visitUseRate.toFixed(2)+'%':'—')+'</div><div style="font-size:10px;color:#94a3b8;margin-top:2px">阈值 '+_vurThreshold+'%'+(_vurMedRef!=null?' · 中位 '+_vurMedRef.toFixed(1)+'%':'')+'</div></div>'+
    '<div style="background:#f8fafc;border-radius:8px;padding:12px"><div style="font-size:11px;color:#64748b;margin-bottom:4px">领取到店率</div><div style="font-size:20px;font-weight:800;color:#1e293b">'+(_cvr!=null?_cvr.toFixed(2)+'%':'—')+'</div></div>'+
    '<div style="'+_ntBg+';border-radius:8px;padding:12px"><div style="font-size:11px;color:#64748b;margin-bottom:4px">未达门槛占比</div><div style="font-size:20px;font-weight:800;color:'+_ntColor+'">'+(_noThrRate!=null?(_noThrRate*100).toFixed(1)+'%':'—')+'</div></div>'+
  '</div></div>';

  // ⑥ 活动明细模块已移除（见 Tab 2 活动明细完整看板）

  // ⑦ 反馈时间线（支持新增/编辑/删除）
  const _pinFbList = (window._pinFeedbackCache || {})[String(b.brandId)] || [];
  const safeName = (b.name||'').replace(/'/g, "\\'");
  let fbListHtml = '';
  if (_pinFbList.length > 0) {
    fbListHtml = _pinFbList.map(f => {
      const ts = f.created_at ? f.created_at.substring(0,16).replace('T',' ') : '';
      return `<div style="display:flex;align-items:flex-start;gap:8px;padding:6px 0;border-bottom:1px solid #f1f5f9;" id="pinFb_${f.id}">
        <div style="flex:1;font-size:12px;color:#334155;">${(f.content||'').replace(/</g,'&lt;').replace(/\n/g,'<br>')}</div>
        <div style="white-space:nowrap;font-size:10px;color:#94a3b8;">${ts}${f.author?' · '+f.author:''}</div>
        <span onclick="_pinEditFb(${f.id})" style="cursor:pointer;font-size:12px;color:#64748b;" title="编辑">✎</span>
        <span onclick="_pinDeleteFb(${f.id},'${b.brandId}')" style="cursor:pointer;font-size:12px;color:#dc2626;" title="删除">×</span>
      </div>`;
    }).join('');
  }
  const fbSec = `<div><div style="font-size:12px;font-weight:700;color:#1e293b;margin-bottom:8px">✏️ 反馈记录 (${_pinFbList.length})</div>
    <div style="max-height:200px;overflow-y:auto;">${fbListHtml || '<div style="font-size:11px;color:#94a3b8;padding:4px 0;">暂无反馈</div>'}</div>
    <div style="display:flex;gap:6px;margin-top:8px;">
      <input id="pinFbInput_${b.brandId}" style="flex:1;padding:6px 10px;border:1px solid #e2e8f0;border-radius:5px;font-size:12px;" placeholder="添加反馈...">
      <button onclick="_pinAddFb('${b.brandId}','${safeName}')" style="padding:6px 12px;background:#2563eb;color:#fff;border:none;border-radius:5px;font-size:12px;cursor:pointer;font-weight:600;">发送</button>
    </div>
  </div>`;

  return '<div style="background:#fff;border:1px solid #e2e8f0;border-radius:8px;padding:16px">' +
    head + resultSec + fourSec + chnSec + custSec + visitSec + fbSec +
  '</div>';
}

// ========== Tab 1 · C · 数据对账 ==========
// 6 个场景: #2 分层分歧 #3 类目分歧 #4 日报分层空 #7 周报未覆盖 #8 四要素数据缺失 #5 公线打标偏差
// 负责人: 行业={#2}, 公线={#3,#4,#7,#8,#5}
// 存已处理标记用 localStorage: key = 'rc_ack_' + data_date + '_' + brand_id + '_' + issue_type

const RC_CATERING = INTRO_CATERING;
const RC_ZHENGCAN = new Set(['正餐']);
// 类目分歧免跟进白名单: 明确的非餐饮服务业态, 业务上跟进表标腰部≠餐饮误标, 无需修正
const RC_CAT_WAIVED = new Set(['按摩足疗','KTV','棋牌室']);

const RC_ISSUE_META = {
  top_fail_four:   { label: '已置顶四要素不达标', desc: '已置顶 ∩ 日报在线 ∩ 未全达标 ∩ 无人工保留标',  owner: '行业', priority: 'P0', color: '#dc2626' },
  tier_mismatch:   { label: '分层分歧',       desc: '跟进表=腰部 ∩ 日报=尾部',                owner: '行业', priority: 'P0', color: '#dc2626' },
  status_mismatch: { label: '状态分歧',       desc: '跟进表=流失/筹备中 ∩ 日报=在线',         owner: '行业', priority: 'P0', color: '#dc2626' },
  top_offline:     { label: '已置顶但不在线', desc: '已置顶 ∩ 日报不在线 (曝光<100)',         owner: '公线', priority: 'P0', color: '#dc2626' },
  cat_mismatch:    { label: '类目分歧',       desc: '跟进表腰部(默认餐饮) ∩ 日报类目非餐饮', owner: '公线', priority: 'P0', color: '#dc2626' },
  tier_empty:      { label: '日报分层字段空', desc: '日报「品牌分层」= "/" 或空',            owner: '公线', priority: 'P0', color: '#dc2626' },
  factor_missing:  { label: '四要素数据缺失', desc: 'factor_biz/price/infra/store 任一为 null', owner: '公线', priority: 'P0', color: '#dc2626' },
  wr_miss:         { label: '周报未覆盖',     desc: '跟进表腰部 ∩ 真实门店数缺失',             owner: '公线', priority: 'P1', color: '#d97706' },
  tier_wrong:      { label: '公线分层打标偏差', desc: '日报分层 ≠ 按审核通过门店数阈值推算',   owner: '公线', priority: 'P2', color: '#0891b2' },
  low_exp:         { label: '曝光少误判',     desc: '跟进表=在线 ∩ 日报不在线 (曝光<100)',     owner: '公线', priority: 'P2', color: '#0891b2' },
};

function _rcAckKey(bid, issueType){
  const dd = (F && F.dataDate) || '';
  return 'rc_ack_' + dd + '_' + bid + '_' + issueType;
}
function _rcIsAcked(bid, issueType){
  try { return localStorage.getItem(_rcAckKey(bid, issueType)) === '1'; } catch(e){ return false; }
}
function _rcToggleAck(bid, issueType){
  try {
    const k = _rcAckKey(bid, issueType);
    if (localStorage.getItem(k) === '1') localStorage.removeItem(k);
    else localStorage.setItem(k, '1');
  } catch(e){}
  rrc();
}

// 扫描 BS 生成对账项数组
function _rcBuildItems(){
  const items = []; // { bid, name, sp, assistant, issue, detail, sortKey }
  const wc = (BS||[]).filter(b => b.tierManual === '腰部' && b.statusManual === '在线');
  // 已置顶品牌 id 集合 (for 场景 top_offline / top_fail_four)
  const TR = (window._D && window._D.topRecords) || [];
  const topBids = new Set(TR.map(r => String(r.brand_id)));

  // 人工打标判定: 品牌在任一维度有 screen_* 反馈
  const _hasKeepMark = function(bid){
    if (!bid) return false;
    return !!(_fbCache[bid+'_screen_biz'] ||
              _fbCache[bid+'_screen_price'] ||
              _fbCache[bid+'_screen_infra'] ||
              _fbCache[bid+'_screen_store']);
  };

  wc.forEach(b => {
    const base = {
      bid: b.brandId, name: b.name, sp: b.spMapped || '',
      assistant: b.assistant || '', cat4: b.cat4, storeCount: b.storeCount,
      storeComplete: b.storeComplete, onlineToday: b.onlineToday,
      dailyTier: b.dailyTierRaw || '',
    };

    // #2 分层分歧: 跟进表腰部 + 日报分层 = "3-尾部"
    // 放过条件: 非正餐 且 门店数>=10 (业务规则: 非正餐≥10家算腰部合理范畴, 无需跟进)
    if (base.dailyTier === '3-尾部'){
      const isZhengcan = RC_ZHENGCAN.has(base.cat4);
      const waived = !isZhengcan && base.cat4 && b.storeCount != null && b.storeCount >= 10;
      items.push({ ...base, issue: 'tier_mismatch',
        detail: '跟进表=腰部 / 日报=尾部' + (b.storeCount != null ? ' (审核通过门店数 '+b.storeCount+')' : ''),
        waived: waived,
        waivedReason: waived ? '非正餐×10家+' : '',
      });
    }
    // #3 类目分歧: cat4 非餐饮 (且不是空)
    // 放过条件: cat4 ∈ 明确非餐饮服务业态 (按摩足疗/KTV/棋牌室)
    if (base.cat4 && !RC_CATERING.has(base.cat4)){
      const catWaived = RC_CAT_WAIVED.has(base.cat4);
      items.push({ ...base, issue: 'cat_mismatch',
        detail: '跟进表腰部(默认餐饮) / 日报类目=' + base.cat4,
        waived: catWaived,
        waivedReason: catWaived ? '到综服务业态' : '',
      });
    }
    // #4 日报分层字段空
    if (!base.dailyTier || base.dailyTier === '/' || base.dailyTier === ''){
      items.push({ ...base, issue: 'tier_empty',
        detail: '日报「品牌分层」字段为空' + (base.cat4 ? ' / 类目=' + base.cat4 : '')
      });
    }
    // #8 四要素数据缺失 (任一 factor == null, 且在餐饮腰部口径)
    if (RC_CATERING.has(base.cat4) && b.onlineToday === true){
      const nullDims = [];
      if (b.bizOk == null) nullDims.push('经营');
      if (b.priceOk == null) nullDims.push('货盘');
      if (b.infraOk == null) nullDims.push('基建-商户号');
      if (b.trafficOk == null) nullDims.push('基建-门店');
      if (nullDims.length){
        items.push({ ...base, issue: 'factor_missing',
          detail: '缺失维度: ' + nullDims.join(', ')
        });
      }
    }
    // #7 周报未覆盖: storeCount != null AND storeComplete == null (审核通过有但 realStore 缺)
    if (b.storeCount != null && b.storeComplete == null){
      items.push({ ...base, issue: 'wr_miss',
        detail: '审核通过 '+b.storeCount+' 家, 真实门店数缺失'
      });
    }
    // #5 公线打标偏差: 日报分层=腰部 但按审核通过推算应尾部
    if (base.dailyTier === '2-腰部' && b.storeCount != null && RC_CATERING.has(base.cat4)){
      const thr = RC_ZHENGCAN.has(base.cat4) ? 5 : 20;
      if (b.storeCount < thr){
        items.push({ ...base, issue: 'tier_wrong',
          detail: '日报标腰部 / 按审核通过门店数 '+b.storeCount+' ('+base.cat4+' 阈值 '+thr+') 应为尾部'
        });
      }
    }
    // #1 曝光少误判: 跟进表=在线 ∩ 日报不在线 ∩ 日报分层=腰部 ∩ 不在其他场景里
    // 不筛 cat4: 跟进表腰部本身就是跟进范围的定义, 类目 ≥ 餐饮
    // 只保留日报分层=腰部 (排除 #2 分层分歧、#4 日报分层空)
    if (b.onlineToday !== true
        && base.dailyTier === '2-腰部'){
      items.push({ ...base, issue: 'low_exp',
        detail: '跟进表=在线 / 日报当日曝光<100 被判不在线' + (b.storeCount != null ? ' (门店 '+b.storeCount+')' : '')
      });
    }
  });

  // #7/#8 置顶相关: 独立遍历 topBids (置顶名单就是最严过滤, 不再筛跟进表分层/状态)
  // 构造 BS 的 brandId → 品牌 的索引 (用于拿完整字段)
  const _bsById = {};
  (BS||[]).forEach(b => { if (b && b.brandId != null) _bsById[String(b.brandId)] = b; });

  topBids.forEach(tbid => {
    const b = _bsById[tbid];
    const baseT = b ? {
      bid: b.brandId, name: b.name, sp: b.spMapped || '',
      assistant: b.assistant || '', cat4: b.cat4, storeCount: b.storeCount,
      storeComplete: b.storeComplete, onlineToday: b.onlineToday,
      dailyTier: b.dailyTierRaw || '',
    } : {
      bid: tbid, name: '(未在日报中)', sp: '', assistant: '',
      cat4: '', storeCount: null, storeComplete: null, onlineToday: null, dailyTier: '',
    };

    // #7 已置顶但不在线 (公线 P0): online_today != true
    if (!b || b.onlineToday !== true){
      const reason = b
        ? '日报不在线 (曝光<100)'
        : '不在当日日报快照中';
      items.push({ ...baseT, issue: 'top_offline',
        detail: '已占用置顶坑位但' + reason + ', 建议补位或替换'
      });
    }

    // #8 已置顶但四要素不达标 (行业 P0): 已置顶 ∩ 日报在线 ∩ 未全达标 ∩ 无人工保留标
    if (b && b.onlineToday === true){
      const allPass = b.bizOk===true && b.priceOk===true && b.infraOk===true && b.trafficOk===true;
      const hasMark = _hasKeepMark(b.brandId);
      if (!allPass && !hasMark){
        const failDims = [];
        if (b.bizOk === false) failDims.push('经营❌');
        if (b.priceOk === false) failDims.push('货盘❌');
        if (b.infraOk === false) failDims.push('基建-商户号❌');
        if (b.trafficOk === false) failDims.push('基建-门店❌');
        if (b.bizOk == null) failDims.push('经营·缺');
        if (b.priceOk == null) failDims.push('货盘·缺');
        if (b.infraOk == null) failDims.push('基建-商户号·缺');
        if (b.trafficOk == null) failDims.push('基建-门店·缺');
        items.push({ ...baseT, issue: 'top_fail_four',
          detail: '失分维度: ' + (failDims.join(' · ') || '(未识别)')
        });
      }
    }
  });

  // #9 状态分歧 (行业 P0): 跟进表=流失/筹备中 ∩ 日报=在线
  (BS||[]).forEach(b => {
    if (b.tierManual !== '腰部') return;
    if (b.statusManual !== '流失' && b.statusManual !== '筹备中') return;
    if (b.onlineToday !== true) return;
    items.push({
      bid: b.brandId, name: b.name, sp: b.spMapped || '',
      assistant: b.assistant || '', cat4: b.cat4, storeCount: b.storeCount,
      storeComplete: b.storeComplete, onlineToday: b.onlineToday,
      dailyTier: b.dailyTierRaw || '',
      issue: 'status_mismatch',
      detail: '跟进表标「' + b.statusManual + '」但日报当日在线 (曝光≥100), 建议确认是否应改为在线'
    });
  });

  return items;
}

function _rcApplyFilter(items){
  const q = (document.getElementById('rcSearch')?.value || '').trim().toLowerCase();
  const fSP = document.getElementById('rcFiltSP')?.value || '';
  const fAsst = document.getElementById('rcFiltAssistant')?.value || '';
  const showAck = document.getElementById('rcShowAcked')?.checked;
  return items.filter(it => {
    // 已处理项始终保留在列表中 (不再隐藏, 仅换色)
    // showAck checkbox 现改为 "隐藏已处理"
    if (showAck && _rcIsAcked(it.bid, it.issue)) return false;
    if (q){
      const s = (it.name + ' ' + it.bid).toLowerCase();
      if (!s.includes(q)) return false;
    }
    if (fSP && it.sp !== fSP) return false;
    if (fAsst && it.assistant !== fAsst) return false;
    return true;
  });
}

function _rcFilterChanged(){ rrc(); }

function _rcExportCSV(){
  const items = _rcApplyFilter(_rcBuildItems());
  const rows = [['优先级','负责人','问题类型','品牌ID','品牌名称','经营服务商','对接助理','跟进表分层','日报分层','日报类目','审核通过门店数','当日在线','免跟进','说明']];
  items.forEach(it => {
    const m = RC_ISSUE_META[it.issue];
    rows.push([
      m.priority, m.owner, m.label,
      it.bid, it.name, it.sp, it.assistant,
      '腰部', it.dailyTier, it.cat4, it.storeCount != null ? it.storeCount : '',
      it.onlineToday === true ? '在线' : (it.onlineToday === false ? '不在线' : '—'),
      it.waived ? ('是 ('+(it.waivedReason||'放过')+')') : '',
      it.detail,
    ]);
  });
  const csv = '\ufeff' + rows.map(r => r.map(c => '"'+String(c==null?'':c).replace(/"/g,'""')+'"').join(',')).join('\n');
  const blob = new Blob([csv], {type:'text/csv'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'reconcile_' + ((F && F.dataDate) || 'today') + '.csv';
  a.click();
}

function rrc(){
  const body = document.getElementById('rcBody');
  if (!body) return;

  const allItems = _rcBuildItems();
  const visible = _rcApplyFilter(allItems);

  // 填筛选器 (只填一次)
  const spSel = document.getElementById('rcFiltSP');
  const astSel = document.getElementById('rcFiltAssistant');
  if (spSel && spSel.options.length <= 1){
    const sps = Array.from(new Set(allItems.map(it => it.sp).filter(Boolean))).sort();
    sps.forEach(v => { const o=document.createElement('option'); o.value=v; o.textContent=v; spSel.appendChild(o) });
  }
  if (astSel && astSel.options.length <= 1){
    const asts = Array.from(new Set(allItems.map(it => it.assistant).filter(Boolean))).sort();
    asts.forEach(v => { const o=document.createElement('option'); o.value=v; o.textContent=v; astSel.appendChild(o) });
  }

  // 总数 badge
  const badge = document.getElementById('rcTotalBadge');
  if (badge){
    const unacked = allItems.filter(it => !_rcIsAcked(it.bid, it.issue) && !it.waived).length;
    const waivedCnt = allItems.filter(it => it.waived).length;
    badge.textContent = '共 ' + unacked + ' 条待处理 · 总 ' + allItems.length + (waivedCnt > 0 ? ' (含 '+waivedCnt+' 免跟进)' : '');
  }

  // 按 owner 分组
  const byOwner = { '行业': [], '公线': [] };
  visible.forEach(it => {
    const owner = RC_ISSUE_META[it.issue].owner;
    if (byOwner[owner]) byOwner[owner].push(it);
  });

  let h = '';
  ['行业', '公线'].forEach(owner => {
    const list = byOwner[owner];
    const ownerColor = owner === '行业' ? { bg:'#fff7ed', bd:'#fdba74', fg:'#c2410c', icon:'🟧' } :
                                            { bg:'#eff6ff', bd:'#93c5fd', fg:'#1d4ed8', icon:'🟦' };
    // 按 issue type 聚合
    const byIss = {};
    list.forEach(it => {
      if (!byIss[it.issue]) byIss[it.issue] = [];
      byIss[it.issue].push(it);
    });
    // P 统计 (排除免跟进)
    const priCnt = { P0:0, P1:0, P2:0 };
    let ownerWaived = 0;
    list.forEach(it => {
      if (it.waived) ownerWaived++;
      else priCnt[RC_ISSUE_META[it.issue].priority]++;
    });
    const priParts = ['P0','P1','P2'].filter(p => priCnt[p]>0).map(p => p+':'+priCnt[p]);
    if (ownerWaived > 0) priParts.push('免跟进:'+ownerWaived);
    const priStr = priParts.join(' · ');

    h += '<details open style="background:'+ownerColor.bg+';border:1px solid '+ownerColor.bd+';border-radius:8px;padding:10px 14px;margin-bottom:10px">';
    h += '<summary style="cursor:pointer;list-style:none;display:flex;justify-content:space-between;align-items:center">';
    h += '<div style="font-size:13px;font-weight:700;color:'+ownerColor.fg+'">'+ownerColor.icon+' '+owner+'跟进 <span style="font-size:11px;font-weight:400;margin-left:6px">'+list.length+' 条'+(priStr?' ('+priStr+')':'')+'</span></div>';
    h += '<span style="font-size:11px;color:#94a3b8">▾ 展开/收起</span></summary>';
    h += '<div style="margin-top:10px">';
    if (list.length === 0 && !Object.keys(RC_ISSUE_META).some(k => RC_ISSUE_META[k].owner === owner)){
      h += '<div style="padding:20px;text-align:center;color:#94a3b8;font-size:12px">✅ 该分组下无未处理项</div>';
    } else {
      // 确保该 owner 下所有定义的场景都展示（含 0 家）
      const ownerIssues = Object.keys(RC_ISSUE_META).filter(k => RC_ISSUE_META[k].owner === owner);
      ownerIssues.sort((a,b) => {
        const pa = RC_ISSUE_META[a].priority, pb = RC_ISSUE_META[b].priority;
        return pa < pb ? -1 : pa > pb ? 1 : 0;
      });
      ownerIssues.forEach(iss => {
        const meta = RC_ISSUE_META[iss];
        const sub = byIss[iss] || [];
        h += '<details style="background:#fff;border:1px solid '+meta.color+'40;border-radius:6px;padding:8px 12px;margin-bottom:8px">';
        h += '<summary style="cursor:pointer;list-style:none;display:flex;justify-content:space-between;align-items:center">';
        h += '<div><span style="display:inline-block;padding:2px 6px;background:'+meta.color+'20;color:'+meta.color+';border-radius:4px;font-size:10px;font-weight:700;margin-right:6px">'+meta.priority+'</span>';
        h += '<b style="font-size:12px;color:#1e293b">'+meta.label+'</b>';
        const subWaived = sub.filter(x => x.waived).length;
        const subActive = sub.length - subWaived;
        h += ' <span style="font-size:11px;color:#94a3b8;margin-left:4px">· '+meta.desc+' · '+sub.length+' 家'+(subWaived>0?' <span style="color:#059669">(含 '+subWaived+' 免跟进)</span>':'')+'</span></div>';
        h += '<span style="font-size:11px;color:#94a3b8">▸</span></summary>';
        h += '<div style="margin-top:8px;border-top:1px dashed #e2e8f0;padding-top:8px">';
        h += '<table style="width:100%;font-size:11px;border-collapse:collapse">';
        h += '<thead><tr style="color:#64748b;font-weight:600"><th style="text-align:left;padding:4px 6px">品牌</th><th style="text-align:left;padding:4px 6px">ID</th><th style="text-align:left;padding:4px 6px">类目</th><th style="text-align:left;padding:4px 6px">经营服务商</th><th style="text-align:left;padding:4px 6px">对接助理</th><th style="text-align:left;padding:4px 6px">详情</th><th style="text-align:center;padding:4px 6px;width:90px">操作</th></tr></thead><tbody>';
        sub.sort((a,b) => a.name.localeCompare(b.name));
        sub.forEach(it => {
          const acked = _rcIsAcked(it.bid, it.issue);
          const waived = it.waived === true;
          const rowStyle = waived
            ? 'border-top:1px solid #f1f5f9;background:#f8fafc;color:#94a3b8;'
            : 'border-top:1px solid #f1f5f9'+(acked?';background:#f0fdf4;':'');
          h += '<tr style="'+rowStyle+'">';
          h += '<td style="padding:4px 6px"><b style="'+(waived?'color:#94a3b8;font-weight:500':'')+'">'+it.name+'</b></td>';
          h += '<td style="padding:4px 6px;color:#64748b">'+it.bid+'</td>';
          h += '<td style="padding:4px 6px;color:#475569">'+(it.cat4||'—')+'</td>';
          h += '<td style="padding:4px 6px">'+(it.sp||'—')+'</td>';
          h += '<td style="padding:4px 6px">'+(it.assistant||'—')+'</td>';
          const detailHtml = it.detail + (waived ? ' <span style="display:inline-block;margin-left:6px;padding:1px 6px;background:#dcfce7;color:#059669;border-radius:3px;font-size:10px;font-weight:600">🟢 '+(it.waivedReason||'无需反馈')+' · 无需反馈</span>' : '');
          h += '<td style="padding:4px 6px;color:'+(waived?'#94a3b8':'#475569')+'">'+detailHtml+'</td>';
          if (waived){
            h += '<td style="padding:4px 6px;text-align:center"><span style="padding:3px 8px;font-size:10px;color:#94a3b8;background:#f1f5f9;border-radius:4px">— 免跟进</span></td>';
          } else {
            h += '<td style="padding:4px 6px;text-align:center"><button onclick="_rcToggleAck(\''+it.bid+'\',\''+it.issue+'\')" style="padding:3px 8px;font-size:10px;border-radius:4px;cursor:pointer;border:1px solid '+(acked?'#86efac':'#cbd5e1')+';background:'+(acked?'#dcfce7':'#fff')+';color:'+(acked?'#15803d':'#64748b')+'">'+(acked?'✓ 已处理':'标记处理')+'</button></td>';
          }
          h += '</tr>';
        });
        h += '</tbody></table>';
        h += '</div></details>';
      });
    }
    h += '</div></details>';
  });

  body.innerHTML = h;
}

let curS=null,sortD=1;function srt(f){if(curS===f)sortD*=-1;else{curS=f;sortD=1};rbt()}
function rbt(){const fSP=document.getElementById('fSP').value,fOwner=document.getElementById('fOwner').value,fAsst=document.getElementById('fAsst').value,fCat=document.getElementById('fCat').value,fTier=document.getElementById('fTier').value,fSt=document.getElementById('fSt').value,fOnline=document.getElementById('fOnline').value,fScr=document.getElementById('fScr').value,fQ=document.getElementById('fQ').value.toLowerCase(),fM=document.getElementById('fMetric').value,fOp=document.getElementById('fOp').value,fVr=document.getElementById('fVal').value,fVn=fVr!==''?parseFloat(fVr):null;
let fl=BS.filter(b=>{if(b.displayLevel==='ka_self')return false;if(fSP&&b.spMapped!==fSP)return false;if(fOwner&&b.owner!==fOwner)return false;if(fAsst&&b.assistant!==fAsst)return false;if(fCat&&b.cat4!==fCat)return false;if(fTier&&b.tierManual!==fTier)return false;if(fSt==='alive'&&b.isAlive!==true)return false;if(fSt==='dead'&&b.isAlive!==false)return false;if(fOnline==='online'&&b.onlineStatus!=='在线')return false;if(fOnline==='pending'&&b.onlineStatus!=='在线待确认')return false;if(fOnline==='nodata'&&b.onlineStatus!=='未更新')return false;if(fOnline==='lost'&&b.statusManual!=='流失')return false;if(fScr==='biz_f'&&b.bizOk!==false)return false;if(fScr==='price_f'&&b.priceOk!==false)return false;if(fScr==='infra_f'&&b.infraOk!==false)return false;if(fScr==='traffic_f'&&b.trafficOk!==false)return false;if(fScr==='all_p'&&!(b.bizOk===true&&b.priceOk===true&&b.infraOk===true&&b.trafficOk===true))return false;if(fScr==='no_data'&&b.hasDailyData)return false;if(fQ&&!b.name.toLowerCase().includes(fQ))return false;if(fM&&fVn!==null){const v=b[fM];if(v==null)return false;if(fOp==='lt'&&!(v<fVn))return false;if(fOp==='lte'&&!(v<=fVn))return false;if(fOp==='gt'&&!(v>fVn))return false;if(fOp==='gte'&&!(v>=fVn))return false}return true});
fl.sort((a,b)=>a.hasDailyData===b.hasDailyData?0:(a.hasDailyData?-1:1));if(curS)fl.sort((a,b)=>{let av=a[curS],bv=b[curS];if(av==null)return 1;if(bv==null)return -1;if(typeof av==='boolean'){av=av?1:0;bv=bv?1:0}if(typeof av==='string')return sortD*av.localeCompare(bv);return sortD*(av-bv)});
const tb=document.querySelector('#bTbl tbody');tb.innerHTML='';fl.forEach(b=>{const al=b.isAlive===true?'<span class="bd b-ok">存活</span>':(b.isAlive===false?'<span class="bd b-d">未存活</span>':'—');const tg=[];if(b.bizOk===false)tg.push('<span class="bd b-d">经营❌</span>');if(b.priceOk===false)tg.push('<span class="bd b-w">货盘⚠️</span>');if(b.infraOk===false)tg.push('<span class="bd b-w">基建⚠️</span>');if(b.trafficOk===false)tg.push('<span class="bd b-w">流量⚠️</span>');if(!b.hasDailyData)tg.push('<span class="bd b-g">无数据</span>');if(b.bizOk===true&&b.priceOk===true&&b.infraOk===true&&b.trafficOk===true&&b.hasDailyData)tg.push('<span class="bd b-ok">✅</span>');
tb.innerHTML+=`<tr><td><b>${b.name}</b></td><td>${b.brandId||'—'}</td><td>${b.cat4||'—'}</td><td>${b.spMapped}</td><td>${b.owner||'—'}</td><td>${b.assistant||'—'}</td><td>${b.tierManual||'—'}</td><td>${b.tierDaily||'—'}</td><td>${b.onlineStatus==='在线'?'<span class="bd b-ok">在线</span>':b.onlineStatus==='在线待确认'?'<span class="bd b-w">在线待确认</span>':b.onlineStatus==='流失'?'<span class="bd b-d">流失</span>':b.onlineStatus==='筹备中'?'<span class="bd b-g">筹备中</span>':b.statusManual||'—'}</td><td>${al}</td><td class="nc">${V(b.survivalRate,'%')}</td><td class="nc ${b.miniApp!=null&&b.miniApp<20?'wc':''}">${V(b.miniApp,'%')}</td><td class="nc ${b.priceOk===false?'wc':''}">${b.priceForce!=null?(b.priceForce>0?'+':'')+_P(b.priceForce).replace('—',''):'—'}</td><td class="nc">${b.storeCount!=null?b.storeCount:'—'}</td><td class="nc ${b.storeComplete!=null&&b.storeComplete<90?'wc':''}">${V(b.storeComplete,'%')}</td><td class="nc">${b.dailyTx!=null?b.dailyTx+'w':'—'}</td><td class="nc ${b.txPerStore!=null&&b.txPerStore<5?'wc':''}">${V(b.txPerStore)}</td><td class="nc">${b.e21ExpRatio!=null?_P(b.e21ExpRatio):'—'}</td><td class="nc">${V(b.e21Ratio,'%')}</td><td class="nc">${b.hiRate_uv!=null?(b.hiRate_uv*100).toFixed(1)+'%':'—'}</td><td class="nc">${b.loRate_uv!=null?(b.loRate_uv*100).toFixed(1)+'%':'—'}</td><td class="nc">${b.custAppRate!=null?(b.custAppRate*100).toFixed(1)+'%':'—'}</td><td class="nc">${b.e21EUR!=null?_P(b.e21EUR):'—'}</td><td>${tg.join(' ')||'—'}</td><td><textarea class="rm" placeholder="..." onblur="saveFeedback('${b.brandId||b.name}','${b.name}','remark',this.value)" onclick="event.stopPropagation()">${_fbCache[(b.brandId||b.name)+'_remark']||b.remark||''}</textarea></td></tr>`});document.getElementById('bCnt').textContent=fl.length+'/'+BS.length;setTimeout(autoResizeAll,50)}

let curCS=null,csD=1;function csrt(f){if(curCS===f)csD*=-1;else{curCS=f;csD=1};rconv()}
function tgact(el){const next=el.closest('tr').nextElementSibling;if(next&&next.classList.contains('act-detail')){next.classList.toggle('show');const btn=el.querySelector('.xb');if(btn){const n=btn.dataset.n;btn.textContent=next.classList.contains('show')?'收起':n+'个活动'}}}
function rconv(){var _dlMap={};BS.forEach(function(b){_dlMap[b.brandId]=b.displayLevel||'other'});const fSP=document.getElementById('cSP').value,fCat=document.getElementById('cCat').value,fTier=document.getElementById('cTier').value,fA=document.getElementById('cAlive').value,fQ=document.getElementById('cQ').value.toLowerCase();
let fl=BC.filter(b=>{if((_dlMap[b.brandId]||'other')==='ka_self')return false;if(fSP&&b.sp!==fSP)return false;if(fCat&&b.cat4!==fCat)return false;if(fTier&&b.tier!==fTier)return false;if(fA==='1'&&b.alive!==true)return false;if(fA==='0'&&b.alive!==false)return false;if(fQ&&!b.name.toLowerCase().includes(fQ))return false;return true});
fl.sort((a,b)=>{if(a.dExpW==null&&b.dExpW!=null)return 1;if(b.dExpW==null&&a.dExpW!=null)return -1;return 0});
if(curCS)fl.sort((a,b)=>{let av=a[curCS],bv=b[curCS];if(av==null)return 1;if(bv==null)return -1;if(typeof av==='string')return csD*av.localeCompare(bv);return csD*(av-bv)});else fl.sort((a,b)=>{if(a.dUse==null)return 1;if(b.dUse==null)return -1;return(b.dUse||0)-(a.dUse||0)});
const tb=document.querySelector('#cTbl tbody');tb.innerHTML='';
fl.forEach(b=>{const al=b.alive===true?'<span class="bd b-ok">✓</span>':(b.alive===false?'<span class="bd b-d">✗</span>':'—');const acts=actByBrand[b.name]||[];const ae=b.dExpW||0,au=b.dUse||0;
tb.innerHTML+=`<tr class="act-row" onclick="tgact(this)"><td><input type="checkbox" class="exp-chk" data-name="${b.name}" onclick="event.stopPropagation()" style="cursor:pointer;vertical-align:middle;margin-right:2px">${acts.length?'<button class="xb" data-n="'+acts.length+'">'+acts.length+'个活动</button>':'—'}</td><td><b>${b.name}</b></td><td>${b.brandId||'—'}</td><td>${b.cat4||'—'}</td><td>${b.sp}</td><td>${b.tier||'—'}</td><td>${al}</td><td class="nc">${b.dailyTx!=null?Nw(b.dailyTx):'—'}</td><td class="nc">${Nw(b.dExpW)}</td><td class="nc">${Nw(b.dClaimW)}</td><td class="nc">${N(b.dUse)}</td><td class="nc">${b.expUseR!=null?_P(b.expUseR):'—'}</td><td class="nc">${WOW(b.wExp)}</td><td class="nc">${Nw(b.e21ExpW)}</td><td class="nc">${N(b.e21Use)}</td><td class="nc">${ae?Pct(b.e21ExpW,ae):'—'}</td><td class="nc">${au?Pct(b.e21Use,au):'—'}</td><td class="nc">${b.e21EUR!=null?_P(b.e21EUR):'—'}</td><td class="nc">${Nw(b.nbExpW)}</td><td class="nc">${N(b.nbUse)}</td><td class="nc">${ae?Pct(b.nbExpW,ae):'—'}</td><td class="nc">${au?Pct(b.nbUse,au):'—'}</td><td class="nc">${b.nbEUR!=null?_P(b.nbEUR):'—'}</td><td class="nc">${Nw(b.payExpW)}</td><td class="nc">${N(b.payUse)}</td><td class="nc">${ae?Pct(b.payExpW,ae):'—'}</td><td class="nc">${au?Pct(b.payUse,au):'—'}</td><td class="nc">${b.payEUR!=null?_P(b.payEUR):'—'}</td></tr>`;
if(acts.length){acts.sort((a,b)=>(b.expPV||0)-(a.expPV||0));let bE=0,bU=0;acts.forEach(function(x){bE+=(x.dailyExpOls||0);bU+=(x.dailyUseOls||0)});let s='<table style="width:100%;font-size:10px;border-collapse:collapse"><thead><tr style="background:var(--x2)"><th style="padding:3px 5px">活动名称</th><th>券名称</th><th class="nc">天数</th><th class="nc">门槛</th><th class="nc">金额</th><th class="nc">价格力</th><th>门槛判定</th><th class="nc">曝光PV</th><th class="nc">曝光占比</th><th class="nc">领取PV</th><th class="nc">核销PV</th><th class="nc">核销占比</th><th class="nc">曝领率</th><th class="nc">领核率</th><th class="nc">曝核率</th><th class="nc">到店核销</th><th class="nc">高频应曝</th><th class="nc">低频应曝</th></tr></thead><tbody>';
acts.forEach(a=>{const ap=a.dailyExpOls||a.expPV||0,au2=a.dailyUseOls||a.usePV||0;s+=`<tr><td style="padding:3px 5px;max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="${a.activityName||''}">${a.activityName||'—'}</td><td style="max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="${a.couponName||''}">${a.couponName||'—'}</td><td class="nc">${a.onlineDays||'—'}</td><td class="nc">${a.threshold!=null?a.threshold:'—'}</td><td class="nc">${a.amount!=null?a.amount:'—'}</td><td class="nc">${a.priceForce!=null?a.priceForce:'—'}</td><td>${a.thresholdJudge||'—'}</td><td class="nc">${N(ap)}</td><td class="nc"><b>${bE?Pct(ap,bE):'—'}</b></td><td class="nc">${N(a.claimPV)}</td><td class="nc">${N(au2)}</td><td class="nc"><b>${bU?Pct(au2,bU):'—'}</b></td><td class="nc">${a.expClaimRate!=null?P(a.expClaimRate):'—'}</td><td class="nc">${a.claimUseRate!=null?P(a.claimUseRate):'—'}</td><td class="nc">${a.expUseRate!=null?P(a.expUseRate):'—'}</td><td class="nc">${a.visitUseRate!=null?P(a.visitUseRate):'—'}</td><td class="nc">${a.hiAppRate!=null?P(a.hiAppRate):'—'}</td><td class="nc">${a.loAppRate!=null?P(a.loAppRate):'—'}</td></tr>`});
s+='</tbody></table>';tb.innerHTML+=`<tr class="act-detail"><td colspan="27" style="padding:3px 5px 5px;background:var(--x0)"><div style="max-height:300px;overflow-y:auto">${s}</div></td></tr>`}});
document.getElementById('cCnt').textContent=fl.length+'/'+BC.length+' 品牌 · '+ACTS.length+' 活动'}


function exportActCSV(){
  var checks=document.querySelectorAll('.exp-chk:checked');
  if(!checks.length){alert('请先勾选要导出的品牌（表格左侧复选框）');return}
  var brandNames={};checks.forEach(function(c){brandNames[c.dataset.name]=true});
  var acts=ACTS.filter(function(a){return brandNames[a.brandName]});
  if(!acts.length){alert('所选品牌无活动数据（请先切到活动转化明细Tab加载活动）');return}
  var cols=['品牌','活动ID','活动名称','券名称','优惠门槛','优惠金额','在线天数','价格力','门槛判定','累计曝光PV','累计领取PV','累计核销PV','日均曝光PV','曝光领取率','领取核销率','曝光核销率','日均核销PV'];
  var keys=['brandName','activityId','activityName','couponName','threshold','amount','onlineDays','priceForce','thresholdJudge','expPV','claimPV','usePV','dailyExpPV','expClaimRate','claimUseRate','expUseRate','dailyUsePV'];
  var csv='\uFEFF'+cols.join(',')+'\n';
  acts.forEach(function(a){
    csv+=keys.map(function(k){var v=a[k];if(v==null)return'';v=String(v);if(v.indexOf(',')>=0||v.indexOf('"')>=0||v.indexOf('\n')>=0)v='"'+v.replace(/"/g,'""')+'"';return v}).join(',')+'\n';
  });
  var blob=new Blob([csv],{type:'text/csv;charset=utf-8'});
  var url=URL.createObjectURL(blob);
  var a=document.createElement('a');a.href=url;a.download='activity_'+checks.length+'brands_'+new Date().toISOString().slice(0,10)+'.csv';
  document.body.appendChild(a);a.click();document.body.removeChild(a);URL.revokeObjectURL(url);
}
function toggleAllExp(master){document.querySelectorAll('.exp-chk').forEach(function(c){c.checked=master.checked})}

// ========== Tab 2: 商户明细 ==========
var _bdSortKey = 'dailyTx';
var _bdSortDir = 'desc';
var _bdTopBids = new Set();

function renderBrandDetail() {
  const thead = document.getElementById('bdThead');
  const tbody = document.getElementById('bdTbody');
  if (!thead || !tbody || !BS || !BS.length) return;

  // 填充筛选器（只填一次）
  const spSel = document.getElementById('bdFiltSP');
  if (spSel && spSel.options.length <= 1) {
    const sps = [...new Set(BS.filter(b => b.spMapped && b.spMapped !== '自研KA').map(b => b.spMapped))].sort();
    sps.forEach(v => { const o = document.createElement('option'); o.value = v; o.textContent = v; spSel.appendChild(o); });
  }
  const catSel = document.getElementById('bdFiltCat');
  if (catSel && catSel.options.length <= 1) {
    const cats = [...new Set(BS.map(b => b.cat4).filter(Boolean))].sort();
    cats.forEach(v => { const o = document.createElement('option'); o.value = v; o.textContent = v; catSel.appendChild(o); });
  }
  const asstSel = document.getElementById('bdFiltAsst');
  if (asstSel && asstSel.options.length <= 1) {
    const assts = [...new Set(BS.filter(b => b.spMapped !== '自研KA').map(b => b.assistant).filter(Boolean))].sort();
    assts.forEach(v => { const o = document.createElement('option'); o.value = v; o.textContent = v; asstSel.appendChild(o); });
  }

  // 筛选
  const fTier = (document.getElementById('bdFiltTier') || {}).value || '';
  const fSP = (document.getElementById('bdFiltSP') || {}).value || '';
  const fCat = (document.getElementById('bdFiltCat') || {}).value || '';
  const fAlive = (document.getElementById('bdFiltAlive') || {}).value || '';
  const fAsst = (document.getElementById('bdFiltAsst') || {}).value || '';
  const fPin = (document.getElementById('bdFiltPin') || {}).value || '';
  const fPass = (document.getElementById('bdFiltPass') || {}).value || '';
  const fQ = ((document.getElementById('bdSearch') || {}).value || '').toLowerCase().trim();

  // 提前初始化 _bdTopBids 供筛选使用
  _bdTopBids = new Set(((window._D && window._D.topRecords) || []).map(r => String(r.brand_id)));

  let data = BS.filter(b => {
    if (b.spMapped === '自研KA') return false; // 剔除自研KA
    if (fTier && b.tierManual !== fTier) return false;
    if (fSP && b.spMapped !== fSP) return false;
    if (fCat && b.cat4 !== fCat) return false;
    if (fAlive === 'alive' && b.isAlive !== true) return false;
    if (fAlive === 'dead' && b.isAlive !== false) return false;
    if (fAsst && b.assistant !== fAsst) return false;
    if (fPin === 'yes' && !_bdTopBids.has(String(b.brandId))) return false;
    if (fPin === 'no' && _bdTopBids.has(String(b.brandId))) return false;
    if (fPass) {
      const isPass = _bdGetVal(b, '_isPass');
      const passType = _bdGetVal(b, '_passType');
      if (fPass === 'pass' && !isPass) return false;
      if (fPass === 'fail' && isPass) return false;
      if (fPass === 'sys' && passType !== '系统达标') return false;
      if (fPass === 'manual' && passType !== '人工达标') return false;
    }
    if (fQ && !(b.name || '').toLowerCase().includes(fQ) && !String(b.brandId).includes(fQ)) return false;
    return true;
  });

  // 排序
  data.sort((a, b) => {
    let va = _bdGetVal(a, _bdSortKey), vb = _bdGetVal(b, _bdSortKey);
    if (va == null && vb == null) return 0;
    if (va == null) return 1;
    if (vb == null) return -1;
    // 布尔：true > false
    if (typeof va === 'boolean') { va = va ? 1 : 0; vb = vb ? 1 : 0; }
    // 字符串：localeCompare
    if (typeof va === 'string' && typeof vb === 'string') {
      return _bdSortDir === 'desc' ? vb.localeCompare(va, 'zh') : va.localeCompare(vb, 'zh');
    }
    return _bdSortDir === 'desc' ? vb - va : va - vb;
  });

  document.getElementById('brandDetailCount').textContent = data.length + ' 个品牌';

  // 列定义
  const cols = [
    { key: 'brandId', label: '品牌ID', w: 60 },
    { key: 'name', label: '品牌名称', w: 90, sticky: true },
    { key: 'cat4', label: '类目', w: 70 },
    { key: 'spMapped', label: '服务商', w: 70 },
    { key: 'assistant', label: '对接助理', w: 60 },
    { key: '_isPinned', label: '置顶', w: 40 },
    { key: 'isAlive', label: '存活', w: 40 },
    { key: 'survivalRate', label: '存活率', w: 55, fmt: 'pct2' },
    { key: '_isPass', label: '四要素达标', w: 60 },
    { key: '_passType', label: '达标分类', w: 65 },
    { key: 'storeCount', label: '审核门店', w: 60, fmt: 'int' },
    { key: '_realStore', label: '真实门店', w: 60, fmt: 'int' },
    { key: 'dailyTx', label: '日均交易(万)', w: 70, fmt: 'f2' },
    { key: 'txPerStore', label: '1店几笔', w: 55, fmt: 'f1' },
    { key: 'miniApp', label: '小程序占比', w: 65, fmt: 'pct1' },
    { key: 'priceForce', label: '价格力', w: 55, fmt: 'pct2' },
    { key: '_storeComplete', label: '门店完整度', w: 65, fmt: 'pct1' },
    { key: 'hiAppUV_all', label: '应曝UV高频', w: 70, fmt: 'int', group: '全渠道老客' },
    { key: 'loAppUV_all', label: '应曝UV低频', w: 70, fmt: 'int' },
    { key: 'hiExpUV_all', label: '尽曝UV高频', w: 70, fmt: 'int' },
    { key: 'loExpUV_all', label: '尽曝UV低频', w: 70, fmt: 'int' },
    { key: '_oldCustRatio', label: '老客曝光占比', w: 70, fmt: 'pct2' },
    { key: 'hiAppUV', label: '应曝UV高频', w: 70, fmt: 'int', group: '二选一渠道' },
    { key: 'loAppUV', label: '应曝UV低频', w: 70, fmt: 'int' },
    { key: 'hiExpUV', label: '尽曝UV高频', w: 70, fmt: 'int' },
    { key: 'loExpUV', label: '尽曝UV低频', w: 70, fmt: 'int' },
    { key: 'e21Ratio', label: '老客曝光占比', w: 70, fmt: 'pct2' },
  ];

  // 左对齐列
  const _leftAlignKeys = ['brandId','name','cat4','spMapped','assistant','isAlive','_isPinned','_isPass','_passType'];

  // 表头
  const thStyle = 'padding:6px 8px;text-align:right;background:#f8fafc;border-bottom:2px solid #e2e8f0;cursor:pointer;user-select:none;font-weight:600;color:#475569;position:sticky;top:0;z-index:2;';
  const thStyleL = thStyle.replace('text-align:right', 'text-align:left');
  thead.innerHTML = '<tr>' + cols.map(c => {
    const align = _leftAlignKeys.includes(c.key) ? thStyleL : thStyle;
    const arrow = _bdSortKey === c.key ? (_bdSortDir === 'desc' ? ' ▼' : ' ▲') : '';
    const stickyExtra = c.sticky ? 'position:sticky;left:0;z-index:3;' : '';
    return `<th onclick="_bdSort('${c.key}')" style="${align}${stickyExtra}min-width:${c.w}px;font-size:10px;">${c.label}${arrow}</th>`;
  }).join('') + '</tr>';

  // 行
  const tdStyle = 'padding:4px 8px;border-bottom:1px solid #f1f5f9;text-align:right;';
  const tdStyleL = tdStyle.replace('text-align:right', 'text-align:left');
  tbody.innerHTML = data.map(b => {
    return '<tr>' + cols.map(c => {
      const v = _bdGetVal(b, c.key);
      const align = _leftAlignKeys.includes(c.key) ? tdStyleL : tdStyle;
      const stickyExtra = c.sticky ? 'position:sticky;left:0;z-index:1;background:#fff;' : '';
      let display;
      if (c.key === 'isAlive') {
        display = v === true ? '<span style="color:#059669">✓</span>' : (v === false ? '<span style="color:#dc2626">✗</span>' : '—');
      } else if (c.key === '_isPinned') {
        display = v ? '<span style="color:#2563eb;font-weight:700">✓</span>' : '';
      } else if (c.key === '_isPass') {
        display = v === true ? '<span style="color:#059669">✓ 达标</span>' : (v === false ? '<span style="color:#dc2626">✗</span>' : '—');
      } else if (c.key === '_passType') {
        display = v === '系统达标' ? '<span style="color:#059669">系统</span>' : (v === '人工达标' ? '<span style="color:#d97706">人工</span>' : '—');
      } else if (c.key === 'name') {
        display = v || '—';
      } else {
        display = _bdFmt(v, c.fmt);
      }
      return `<td style="${align}${stickyExtra}">${display}</td>`;
    }).join('') + '</tr>';
  }).join('');
}

function _bdGetVal(b, key) {
  if (key === '_isPinned') {
    return _bdTopBids.has(String(b.brandId));
  }
  if (key === '_isPass') {
    const sysPass = b.bizOk === true && b.priceOk === true && b.infraOk === true && b.trafficOk === true;
    const bid = b.brandId;
    const manualPass = !!(_fbCache[bid+'_screen_biz'] || _fbCache[bid+'_screen_price'] || _fbCache[bid+'_screen_infra'] || _fbCache[bid+'_screen_store']);
    return sysPass || manualPass ? true : false;
  }
  if (key === '_passType') {
    const sysPass = b.bizOk === true && b.priceOk === true && b.infraOk === true && b.trafficOk === true;
    const bid = b.brandId;
    const manualPass = !!(_fbCache[bid+'_screen_biz'] || _fbCache[bid+'_screen_price'] || _fbCache[bid+'_screen_infra'] || _fbCache[bid+'_screen_store']);
    if (sysPass) return '系统达标';
    if (manualPass) return '人工达标';
    return null;
  }
  if (key === '_realStore') {
    return (b.storeCount && b.storeComplete && b.storeComplete > 0) ? Math.round(b.storeCount / (b.storeComplete / 100)) : null;
  }
  if (key === '_storeComplete') {
    return b.storeComplete;
  }
  if (key === '_oldCustRatio') {
    const exp7 = (b.hiExpUV_all || 0) + (b.loExpUV_all || 0);
    return (exp7 > 0 && b.dailyTx > 0) ? (exp7 / 7 / (b.dailyTx * 10000) * 100) : null;
  }
  return b[key];
}

function _bdFmt(v, fmt) {
  if (v == null) return '—';
  if (fmt === 'pct1') return v.toFixed(1) + '%';
  if (fmt === 'pct2') return v.toFixed(2) + '%';
  if (fmt === 'f1') return v.toFixed(1);
  if (fmt === 'f2') return v.toFixed(2);
  if (fmt === 'int') return typeof v === 'number' ? Math.round(v).toLocaleString() : String(v);
  return String(v);
}

function _bdSort(key) {
  if (_bdSortKey === key) {
    _bdSortDir = _bdSortDir === 'desc' ? 'asc' : 'desc';
  } else {
    _bdSortKey = key;
    _bdSortDir = 'desc';
  }
  renderBrandDetail();
}

function stab(i){document.querySelectorAll('.tab').forEach((b,j)=>{b.classList.toggle('on',j===i)});document.querySelectorAll('.P').forEach((c,j)=>{c.classList.toggle('on',j===i)});if(i===1&&_pinChart){setTimeout(()=>_pinChart.resize(),50)}if(i===2&&!window._bdRendered){window._bdRendered=true;renderBrandDetail();}}


async function initDashboard(targetDate) {
  try {
    const D = await loadDashboardData(targetDate);

    F=D.final,BS=F.brands,SPS=F.spSummary,SOP=D.sop,BC=D.bc,ACTS=D.acts;
    window._D=D;
W=BS.filter(b=>b.tierManual==='腰部'),KA=BS.filter(b=>b.tierManual==='KA');
    actByBrand={};ACTS.forEach(a=>{const n=a.brandName;if(!actByBrand[n])actByBrand[n]=[];actByBrand[n].push(a)});
const ss=[...new Set(BS.map(b=>b.spMapped))].sort();['fSP'].forEach(id=>{const s=document.getElementById(id);if(!s)return;ss.forEach(v=>{const o=document.createElement('option');o.value=v;o.textContent=v;s.appendChild(o)})});[...new Set(BS.map(b=>b.owner).filter(Boolean))].sort().forEach(v=>{const s=document.getElementById('fOwner');if(s)s.innerHTML+=`<option value="${v}">${v}</option>`});[...new Set(BS.map(b=>b.assistant).filter(Boolean))].sort().forEach(v=>{const s=document.getElementById('fAsst');if(s)s.innerHTML+=`<option value="${v}">${v}</option>`});const catCnt={};BS.forEach(b=>{const c=b.cat4;if(c){catCnt[c]=(catCnt[c]||0)+1}});const cats=Object.keys(catCnt).filter(c=>catCnt[c]>=3).sort();['fCat'].forEach(id=>{const s=document.getElementById(id);if(!s)return;cats.forEach(v=>{const o=document.createElement('option');o.value=v;o.textContent=v+' ('+catCnt[v]+')';s.appendChild(o)})});rsop();rov();rintro(D);rfc();rfcmark();rpin();rpinq();rpinc();rrc();document.getElementById('loading').style.display='none'

    // ── 活动明细数据延迟加载（原 Tab2 → 现附录 Tab4）──
    // 也预加载活动数据供品牌诊断卡片使用 (未达门槛占比)
    D.loadActivities().then(acts => { window._D.acts = acts; ACTS = acts; actByBrand={};ACTS.forEach(a=>{const n=a.brandName;if(!actByBrand[n])actByBrand[n]=[];actByBrand[n].push(a)}); }).catch(()=>{});
    const tabBtns = document.querySelectorAll('.tab');
    if (tabBtns.length >= 4) {
      let actsLoadedForUI = false;
      tabBtns[3].addEventListener('click', async function() {
        if (!actsLoadedForUI) {
          actsLoadedForUI = true;
          const le = document.getElementById('loading');
          if (le) { le.style.display = 'flex'; }
          const freshActs = await D.loadActivities();
          ACTS.length = 0; ACTS.push.apply(ACTS, freshActs);
          if (typeof actByBrand !== 'undefined') {
            Object.keys(actByBrand).forEach(function(k){delete actByBrand[k]});
            ACTS.forEach(function(a){var n=a.brandName;if(!actByBrand[n])actByBrand[n]=[];actByBrand[n].push(a)});
          }
          if (le) le.style.display = 'none';
          rconv();
        }
      });
    }

    // ── 日期选择器 ──
    var dateSelect = document.getElementById('dateSelector');
    if (dateSelect) {
      var headers = {'apikey': SUPA_KEY, 'Authorization': 'Bearer ' + SUPA_KEY};
      var resp = await fetch(SUPA_URL + '/rest/v1/brand_snapshot?select=data_date&order=data_date.desc&limit=30', {headers: headers});
      var allDates = await resp.json();
      var seen = {};
      allDates.forEach(function(d) {
        if (!seen[d.data_date]) {
          seen[d.data_date] = true;
          var opt = document.createElement('option');
          opt.value = d.data_date; opt.textContent = d.data_date;
          dateSelect.appendChild(opt);
        }
      });
      dateSelect.onchange = function() {
        document.getElementById('loading').style.display = 'flex';
        initDashboard(dateSelect.value);
      };
    }

  } catch (err) {
    console.error('Dashboard load error:', err);
    var le = document.getElementById('loading');
    if (le) le.innerHTML = '<div style="color:red;padding:40px;text-align:center">数据加载失败: ' + err.message + '<br><br><small>请检查网络连接后刷新页面</small></div>';
  }
}
initDashboard();

