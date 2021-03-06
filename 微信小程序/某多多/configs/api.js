Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = {
    indexGoodsList: "v5/goods",
    orderGoodsDetail: "v4/goods/{0}",
    createOrder: "order",
    prePay: "order/prepay",
    mallInfo: "mall/{0}/info",
    mallCertificated: "mall/{0}/is_certificated",
    mallVerifyCode: "verification_code_picture",
    mallVerifyCodeJudge: "mall/{0}/certificates",
    getAuthorized: "api/turing/mall/{0}/authorize",
    mallCategory: "api/turing/mall/query_mall_category?mall_id={0}",
    mallCatGoods: "api/turing/mall/query_cat_goods?mall_id={0}&category_id={1}&type={2}&page_no={3}&page_size={4}&sort_type={5}",
    addresses: "addresses",
    address: "address",
    deleteAddress: "address/delete",
    login: "login",
    userAB: "user/is_ab",
    idiomRefer: "backend/idiom/find/v3",
    idiomHelp: "backend/idiom/help",
    idiomRange: "backend/idiom/friends/v3",
    idiomAnswer: "backend/idiom/answer/v3",
    idiomShare: "backend/idiom/share",
    idiomReward: "backend/idiom/reward",
    idiomLevelList: "backend/idiom/level",
    regions: "regions",
    groupOrder: "group_order/{0}?need_white=true",
    v2GoodsDetail: "v5/goods/",
    localGroup: "goods/{0}/local_group",
    catgoods: "v4/operation/{0}/groups",
    noV4Catgoods: "operation/{0}/groups",
    v3CatgoodsList: "v3/operation/{0}/groups",
    indexPageTopBanner: "api/fiora/bannerindex/query/platform?platform=5&version=2",
    homeOperations: "api/fiora/v2/home_operations",
    goodsLocalGroups: "goods/local_groups",
    luckyDrawResult: "lucky_draw_result/",
    mallCoupons: "query_merchant_candidate_coupons",
    platformCoupons: "query_candidate_coupons",
    takeMerchantCoupon: "take_merchant_coupon",
    avaCoupons: "coupon/v2/query_validity_coupons?page={0}&size={1}&fc_version=1&sort_rule=coupon_end_time",
    tzfreeCoupons: "coupons/free?fc_version=1",
    spikeSelloutList: "spike_list?page={0}&size={1}&nostock=true",
    haitaoSpikeSelloutList: "spike_haitao?page={0}&size={1}&nostock=true",
    spikeGoods: "spike/{0}/goods",
    regionsJson: "regions_json",
    takeCaptainCoupon: "coupon/take_one_yuan_coupon",
    cancelOrder: "order/{0}/cancel",
    subjectCollection: "subject_collection/{0}",
    promotionCollection: "promotion/collection/{0}",
    promotionMix: "promotion/{0}/mix",
    subjectGoodsApi: "api/fiora/subject/goods?subject_id={0}&page={1}&size={2}&province_id={3}",
    subjectGoodsPush: "api/fiora/subject/push_goods",
    subjectGoodsLucky: "api/fiora/subject/lucky_goods",
    subjectRollMessage: "subject/{0}?roll_message=0",
    weixinAddress: "address/weixin",
    likeGoods: "v2/favorite/goods?favorite_update_time={0}&page={1}&size={2}",
    doLikeGoods: "v2/favorite/like/",
    unLikeGoods: "v2/favorite/unlike/",
    likeRecommend: "recommendation/favorite?offset={0}&count={1}",
    orderRecommendGoods: "api/tesla/query?offset={0}&count={1}",
    likeMalls: "favorite/mall/list?page={0}&size={1}",
    likeMallsGoods: "api/fiora/mall/{0}",
    unLikeMall: "favorite/mall/unlike/",
    doLikeMall: "favorite/mall/like/",
    likeGoodsIdsList: "favorite/goods/id/list",
    likeMallsIdsList: "favorite/mall/id/list",
    userIdCard: "v2/user/card",
    submitIdCard: "user/card",
    userIdCardWithAuth: "api/apollo/v3/user/card/update",
    haitaoBanner: "haitao_banner",
    haitaoGoodsList: "v2/haitaov2?page={0}&size={1}",
    luckyDraw: "lucky_draw/",
    setFormId: "vino/form_id/set",
    setRefuseFormId: "api/flow/vino/refuse_form_id/set",
    ordersv2: "ordersv2/{0}?page={1}&size={2}",
    myGroup: "order/group_orders?page={0}&size={1}",
    homeSubject: "home_show",
    chat_list: "api/rainbow/latest_conversations?page={0}&size={1}",
    afterSales: "after_sales/list?range={0}&offset={1}&size={2}",
    moneyPath: "api/weaver/refund/track?order_sn={0}",
    afterSalesForm: "order/{0}",
    afterSalesDetail: "after_sales/detail/{0}",
    afterSalesTrigger: "after_sales/trigger/{0}",
    afterSalesFormSelect: "after_sales/all/reason?order_sn={0}",
    afterSalesCreate: "after_sales/create",
    express_complaint: "express/logistics_complaint_type_detail/get",
    express_complaint_form: "api/express/express/logistics_complaint/user/create",
    getUploadFileSign: "file/signature",
    uploadFileUrl: "https://file.yangkeduo.com/general_file",
    getOpenGid: "api/apollo/query_open_gid",
    cancelAfterSales: "after_sales/cancel/{0}",
    reapplyAfterSales: "after_sales/reapply/{0}",
    modifyAfterSales: "after_sales/modify/{0}",
    economicalBrandTabInfo: "famous_brand",
    economicalBrandGoodsInfo: "famous_brand/{0}/v2/list",
    brandSubjectBrandDetail: "famous_brand/{0}/brand",
    brandSubjectGoodsDetail: "famous_brand/{0}",
    myFootPrint: "footprint/goods/listall",
    afterSaleAppend: "after_sales/append_content/{0}",
    silentLogin: "login",
    fillReturnForm: "after_sales/confirm_delivery/{0}",
    applyPlatformIntervention: "after_sales/apply_platform_join/{0}",
    luaApiGateway: "express/express_cost/get_cost?cost_template_id={0}&province_id={1}&goods_item={2}&order_amount={3}&sku_id={4}&goods_id={5}&goods_weight={6}",
    getFreeWinnerList: "free/activity/winner/list",
    getBlackList: "user/is_ab?group_order_id={0}",
    getConfig: "access/Configure/GetConfig",
    getConfigStartup: "backend/conf/startup",
    getConfigStartupWithKey: "backend/conf/startup/key",
    getRecommendGoodsData: "recommendation",
    getChargeHistory: "virtual_goods/get_charge_history",
    getChargeRouter: "virtual_goods/get_mobile_charge_router",
    getNeighbourGroup: "virtual_goods/get_neighbour_group",
    uploadTemplate: "backend/template/upload",
    goodsNoticeCancel: "backend/template/goods/notice/cancel",
    getAdSubject: "api/flow/hobbiton/weixin/page?goods_id={0}",
    getCouponRecommendation: "recommendation/coupon?offset={0}&count={1}&coupon_id={2}",
    indexQuickEntranceList: "backend/subject_list",
    getTemplateRimendGoodsId: "backend/template/find",
    GetCostomImage: "access/Image/GetCustomImage",
    chatOrders: "orders/online_chat/all?page={0}&size={1}&mall_id={2}&offset={3}",
    selfServiceTicket: "api/colombo/order/ticket",
    selfServiceMessage: "api/colombo/ticket",
    selfServiceTicketList: "api/colombo/ticket/list?page_num={0}&page_size={1}",
    selfServiceProblems: "api/colombo/problem/list",
    postSelfServiceMessage: "api/colombo/ticket/{0}",
    selfServiceOrders: "orders/self_service/{0}?mall_id={1}&page={2}&size={3}&offset={4}",
    chatOnlineOrders: "orders/online_chat/{0}?mall_id={1}&page={2}&size={3}&offset={4}",
    getGenTianTabData: "api/gentian/{0}/resource_tabs?use_page=true",
    getGenTianGoodsData: "api/gentian/{0}/resource_goods?tab_id={1}&page={2}&size={3}",
    promoTabInfo: "api/carnival/sub_promotion_summary/{0}",
    promoVenueGoods: "api/carnival/promotion_goods/{0}",
    carnivalPromotion: "api/carnival/special_promotion_list",
    mainCarnivalPromotion: "api/carnival/main_promotion_list",
    relayPromotion: "api/carnival/relay_promotion_list",
    roewe: "api/roewe/query",
    tesla: "api/tesla/query",
    carnivalImages: "backend/carnival_images",
    getSpikeActivity: "spike_activity?page={0}&size={1}",
    getPreheatGoods: "carnival/get_preheat_goods",
    reservePreheatGoods: "carnival/reserve_preheat_goods",
    promotionUserInfo: "backend/double11/userinfo",
    promotionShare: "backend/double11/share",
    getIShoppingTabData: "ishopping/tablist",
    getIShoppingGoddsData: "ishopping/goods?tab_id={0}&page={1}&size={2}",
    getOMSConfig: "backend/config/{0}",
    saveGroupInfo: "backend/usergroup",
    queryOpenId: "api/apollo/query_open_id",
    orderPayCheck: "api/aristotle/pay_check",
    createEnvGroup: "backend/amazon/nile/group/create",
    getLatestEnvGroup: "backend/amazon/nile/group/get/current/v2",
    joinGroup: "backend/amazon/nile/group/join/v2",
    getGroupInfo: "backend/amazon/nile/group/get/v2",
    getMallGroup: "api/leibniz/mall/groups",
    checkMerchantCoupon: "api/lisbon/query_usable_merchant_batches",
    updateOrderAddress: "api/vancouver/update_address",
    getGotCouponUsers: "backend/amazon/nile/group/bubbles",
    getCouponState: "api/philo/red_dot",
    getFriendPayOrderInfo: "order/friend_pay/query/{0}",
    hasOrders: "api/flow/doom/ext/order/user/me",
    fetchUserInfo: "user/profile/me",
    updateUserInfo: "api/apollo/weapp/update/profile",
    encodeAlias: "backend/conf/alias/format",
    decodeAlias: "backend/conf/alias/parse",
    getUnpaidOrder: "api/aristotle/unpaid_order",
    goodsDetailGenerateCard: "access/Image/GetGoodsDetailImage",
    bargainDetailGenerateCard: "backend/goods/bargain/share/friend",
    setDefaultAddress: "api/apollo/address_default",
    modifyAddress: "api/apollo/address_info",
    getLogisticeBanner: "backend/conf/page",
    createEnvGroupNew: "api/amazon/red/packet/group/create",
    getCurrentEnvGroup: "api/amazon/red/packet/group/get/current/v2",
    joinGroupNew: "api/amazon/red/packet/group/join/v2",
    getGroupInfoNew: "api/amazon/red/packet/group/get",
    getOpenedFriendsList: "api/amazon/red/packet/group/list",
    getBigSaleInfo: "backend/conf/event/2018_spring_festival",
    getRandomLuckyUser: "backend/goods/user/random/v2",
    getLotteryComment: "backend/goods/comments?page={0}&size={1}",
    getOpenEnvelopeShareImg1: "backend/amazon/nile/group/image/style1",
    getOpenEnvelopeShareImg2: "backend/amazon/nile/group/image/style2",
    getSubscribeInfo: "api/apollo/v3/user/is_subscribed",
    getUserOrderInfo: "api/flow/doom/ext/order/user/me",
    activityAdGoods: "api/tyrion/query?page={0}&size={1}&app_name={2}&list_id={3}",
    complaint_query: "api/express/express/logistics_complaint/user/query",
    createNewyearHeka: "backend/card/add",
    queryNewyearHeka: "backend/conf/card/info",
    queryMobile: "api/apollo/query_open_mobile",
    queryMobileValue: "backend/phone/assess",
    queryMobileDetailInfo: "backend/phone/find",
    checkSensitiveWord: "backend/conf/sensitive",
    getNewArrivalSubSubject: "api/gentian/1/promotion_mix",
    idiomQueryGoods: "api/tyrion/query",
    getLandPageGoodsInfo: "api/piece/members_goods",
    queryOrders: "ordersv2/search?page={0}&size={1}&key_word={2}",
    getFetchCoupon: "api/daenerys/fetch_coupon",
    takeFetchCoupon: "api/daenerys/take_coupon",
    getGoodsInfo: "targaryen/api/queryGoodsDetail",
    openEveGetCoupon: "backend/amazon/nile/group/coupon/take",
    getUserBonus: "backend/groupsign/v2/bonus",
    getEnvelopAmount: "backend/groupsign/v2/receive",
    activeEnvelope: "backend/groupsign/v2/active",
    getEnvelopTypeList: "backend/groupsign/coupon/typelist",
    getEnvelopCouponList: "backend/groupsign/coupon/couponlist",
    groupSignExchangeCoupon: "backend/groupsign/v2/exchange",
    sendCardMessage: "api/rainbow/chat/send_card_message",
    compensationGoods: "api/fiora/compensation_goods",
    checkPaidInMall: "order/is_paid_in_mall",
    littlePayDetail: "/api/asm/little_play_money/detail",
    wxForceUpdate: "backend/conf/xcx/update",
    getProvinceId: "api/fiora/province",
    getGroupShareCodePic: "backend/goods/comments/order/share/code",
    getGroupShareImg: "backend/goods/comments/order/share/picture",
    getGoodsShareImg: "backend/goods/plain/share/picture",
    getTurinMall: "api/turing/mall/query_recommend_goods",
    takeMoney: "backend/questionpk/trywithdraw",
    openPass: "backend/questionpk/tryopenlevel",
    openBox: "backend/questionpk/tryopenbox",
    getPKInfo: "backend/questionpk/getuserinfo",
    answerInvite: "backend/questionpk/tryshare",
    getPassInfo: "backend/questionpk/getlevelinfo",
    tryMatch: "backend/questionpk/level/trymatch",
    tryRevive: "backend/questionpk/tryrevive",
    getRoomInfo: "backend/questionpk/level/getroominfo",
    getRoomStatus: "backend/questionpk/level/getroomstatus",
    answerCashQuestion: "backend/questionpk/level/answer",
    redpackHelping: "backend/v2/redpackHelping/get",
    getRedpackHelping: "backend/v2/redpackHelping/info/friend",
    getExtraRedPack: "backend/v2/redpackHelping/extra",
    redpackFriendHelp: "backend/v2/redpackHelping/help",
    redpackBubbles: "backend/v2/redpackHelping/bubbles",
    redpackTake: "backend/v2/redpackHelping/take",
    getGroupSignInBuble: "backend/groupsign/v2/bubble",
    getGroupSignInRecord: "backend/groupsign/v2/record/list",
    deleteGroup: "backend/groupsign/v2/groupsign/delete",
    unlockEnvelop: "backend/groupsign/v2/unlock",
    modifyGroupName: "backend/groupsign/v2/groupname/update",
    getOrdersTrackStatus: "api/express/track/status",
    remainDailyDuobaoCount: "backend/treasure/remainder/count",
    goldenEggsActivityInfo: "api/macchiato/activity_apply/last_time/remind/2",
    goldenEggsCouponRecordList: "api/macchiato/coupon_record/list/2",
    goldenEggsJoin: "api/macchiato/activity_operate/join",
    goldenEggsCreate: "api/macchiato/activity_apply/create",
    goldenEggsCouponList: "api/macchiato/coupon_record/list/2",
    goldenEggsSuperpositionCoupon: "api/macchiato/user/superposition_coupon",
    goldenEggsInfoById: "api/macchiato/activity_operate/info/2",
    goldenEggsAddChance: "api/macchiato/user/add_chance",
    goldenEggsAddAddress: "api/macchiato/user/set_address",
    getAbScene: "api/flow/ab/scene",
    getAlexaGoods: "api/alexa/v1/goods"
};

exports.default = e;