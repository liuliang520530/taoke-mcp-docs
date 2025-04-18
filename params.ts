import { z } from 'zod';

/**
 * 拼多多API参数定义
 * 集中管理所有拼多多API的参数定义
 */
export const PddParams = {
	/**
	 * 多多进宝商品查询参数
	 * 接口名称：pdd.ddk.oauth.goods.search
	 */
	goodsSearch: {
		keyword: z
			.string()
			.optional()
			.describe(
				'【非必填】商品关键词，与opt_id字段选填一个或全部填写。可支持goods_id、拼多多链接（即拼多多app商详的链接）、进宝长链/短链（即为pdd.ddk.goods.promotion.url.generate接口生成的长短链）'
			),
		activity_tags: z
			.array(z.number().int())
			.optional()
			.describe(
				'【非必填】活动商品标记数组，例：[4,7]，4-秒杀，7-百亿补贴，10851-千万补贴，11879-千万神券，10913-招商礼金商品，31-品牌黑标，10564-精选爆品-官方直推爆款，10584-精选爆品-团长推荐，24-品牌高佣，其他的值请忽略'
			),
		block_cat_packages: z
			.array(z.number().int())
			.optional()
			.describe(
				'【非必填】屏蔽商品类目包：1-拼多多小程序屏蔽的类目&关键词;2-虚拟类目;3-医疗器械;4-处方药;5-非处方药'
			),
		block_cats: z
			.array(z.number().int())
			.optional()
			.describe(
				'【非必填】自定义屏蔽一级/二级/三级类目ID，自定义数量不超过20个;使用pdd.goods.cats.get接口获取cat_id'
			),
		cat_id: z
			.number()
			.int()
			.optional()
			.describe('【非必填】商品类目ID，使用pdd.goods.cats.get接口获取'),
		custom_parameters: z
			.string()
			.optional()
			.describe(
				'【非必填】自定义参数，为链接打上自定义标签；自定义参数最长限制64个字节；格式为：  {"uid":"11111","sid":"22222"} ，其中 uid 用户唯一标识，可自行加密后传入，每个用户仅且对应一个标识，必填； sid 上下文信息标识，例如sessionId等，非必填。该json字符串中也可以加入其他自定义的key。（如果使用GET请求，请使用URLEncode处理参数）'
			),
		force_auth_duo_id: z
			.boolean()
			.optional()
			.describe('【非必填】是否使用工具商专属推广计划，默认为false'),
		goods_img_type: z
			.number()
			.int()
			.min(0)
			.max(2)
			.optional()
			.describe('【非必填】商品主图类型：1-场景图，2-白底图，默认为0'),
		goods_sign_list: z
			.array(z.string())
			.optional()
			.describe(
				'【非必填】商品goodsSign列表，例如：["c9r2omogKFFAc7WBwvbZU1ikIb16_J3CTa8HNN"]，支持通过goodsSign查询商品。goodsSign是加密后的goodsId, goodsId已下线，请使用goodsSign来替代。使用说明：https://jinbao.pinduoduo.com/qa-system?questionId=252'
			),
		is_brand_goods: z
			.boolean()
			.optional()
			.describe('【非必填】是否为品牌商品'),
		list_id: z
			.string()
			.optional()
			.describe('【非必填】翻页时建议填写前页返回的list_id值'),
		merchant_type: z
			.number()
			.int()
			.optional()
			.describe(
				'【非必填】店铺类型，1-个人，2-企业，3-旗舰店，4-专卖店，5-专营店，6-普通店（未传为全部）'
			),
		merchant_type_list: z
			.array(z.number().int())
			.optional()
			.describe('【非必填】店铺类型数组，例如：[1,2]'),
		opt_id: z
			.number()
			.int()
			.optional()
			.describe(
				'【非必填】商品标签类目ID，与keyword字段选填一个或全部填写，使用pdd.goods.opt.get获取'
			),
		page: z
			.number()
			.int()
			.optional()
			.describe('【非必填】默认值1，商品分页数'),
		page_size: z
			.number()
			.int()
			.min(1)
			.max(100)
			.optional()
			.describe('【非必填】默认100，每页商品数量'),
		range_list: z
			.array(
				z.object({
					range_id: z.number().int(),
					range_from: z.number().int(),
					range_to: z.number().int(),
				})
			)
			.optional()
			.describe(
				'【非必填】筛选范围列表 样例：[{"range_id":0,"range_from":1,"range_to":1500},{"range_id":1,"range_from":1,"range_to":1500}]'
			),
		risk_params: z
			.record(z.string())
			.optional()
			.describe('【非必填】风控参数'),
		sort_type: z
			.number()
			.int()
			.optional()
			.describe(
				'【非必填】排序方式:0-综合排序;1-按佣金比率升序;2-按佣金比例降序;3-按价格升序;4-按价格降序;5-按销量升序;6-按销量降序;7-优惠券金额排序升序;8-优惠券金额排序降序;9-券后价升序排序;10-券后价降序排序;11-按照加入多多进宝时间升序;12-按照加入多多进宝时间降序;13-按佣金金额升序排序;14-按佣金金额降序排序;15-店铺描述评分升序;16-店铺描述评分降序;17-店铺物流评分升序;18-店铺物流评分降序;19-店铺服务评分升序;20-店铺服务评分降序;27-描述评分击败同类店铺百分比升序，28-描述评分击败同类店铺百分比降序，29-物流评分击败同类店铺百分比升序，30-物流评分击败同类店铺百分比降序，31-服务评分击败同类店铺百分比升序，32-服务评分击败同类店铺百分比降序'
			),
		use_customized: z
			.boolean()
			.optional()
			.describe(
				'【非必填】是否使用个性化推荐，true表示使用，false表示不使用，默认true。'
			),
		with_coupon: z
			.boolean()
			.optional()
			.describe(
				'【非必填】是否只返回优惠券的商品，false返回所有商品，true只返回有优惠券的商品'
			),
	},

	/**
	 * 多多进宝商品详情查询参数
	 * 接口名称：pdd.ddk.oauth.goods.detail
	 */
	goodsDetail: {
		goods_img_type: z
			.number()
			.int()
			.optional()
			.describe('【非必填】商品主图类型：1-场景图，2-白底图，默认为0'),
		goods_sign: z
			.string()
			.optional()
			.describe(
				'【非必填】商品goodsSign，支持通过goodsSign查询商品。goodsSign是加密后的goodsId, goodsId已下线，请使用goodsSign来替代。使用说明：https://jinbao.pinduoduo.com/qa-system?questionId=252'
			),
		need_sku_info: z
			.boolean()
			.optional()
			.describe(
				'【非必填】是否获取sku信息，默认false不返回。（特殊渠道权限，需额外申请）'
			),
		risk_params: z
			.record(z.string())
			.optional()
			.describe('【非必填】风控参数'),
		search_id: z
			.string()
			.optional()
			.describe(
				'【非必填】搜索id，建议填写，提高收益。来自pdd.ddk.goods.recommend.get、pdd.ddk.goods.search、pdd.ddk.top.goods.list.query等接口'
			),
	},

	/**
	 * 多多进宝商品推荐查询参数
	 * 接口名称：pdd.ddk.oauth.goods.recommend.get
	 */
	goodsRecommend: {
		activity_tags: z
			.array(z.number().int())
			.optional()
			.describe(
				'【非必填】活动商品标记数组，例：[4,7]，4-秒杀，7-百亿补贴，10851-千万补贴，11879-千万神券，10913-招商礼金商品，31-品牌黑标，10564-精选爆品-官方直推爆款，10584-精选爆品-团长推荐，24-品牌高佣，其他的值请忽略'
			),
		cat_id: z
			.number()
			.int()
			.optional()
			.describe(
				'【非必填】猜你喜欢场景的商品类目，20100-百货，20200-母婴，20300-食品，20400-女装，20500-电器，20600-鞋包，20700-内衣，20800-美妆，20900-男装，21000-水果，21100-家纺，21200-文具,21300-运动,21400-虚拟,21500-汽车,21600-家装,21700-家具,21800-医药;'
			),
		channel_type: z
			.number()
			.int()
			.optional()
			.describe(
				'【非必填】进宝频道推广商品: 1-今日销量榜,3-相似商品推荐,4-猜你喜欢(和进宝网站精选一致),5-实时热销榜,6-实时收益榜。默认值5'
			),
		force_auth_duo_id: z
			.boolean()
			.optional()
			.describe('【非必填】是否使用工具商专属推广计划，默认为false'),
		goods_img_type: z
			.number()
			.int()
			.optional()
			.describe('【非必填】商品主图类型：1-场景图，2-白底图，默认为0'),
		goods_sign_list: z
			.array(z.string())
			.optional()
			.describe(
				'【非必填】商品goodsSign列表，相似商品推荐场景时必传，仅取数组的第一位，例如：["c9r2omogKFFAc7WBwvbZU1ikIb16_J3CTa8HNN"]。goodsSign是加密后的goodsId, goodsId已下线，请使用goodsSign来替代。使用说明：https://jinbao.pinduoduo.com/qa-system?questionId=252'
			),
		limit: z
			.number()
			.int()
			.optional()
			.describe('【非必填】一页请求数量；默认值 ： 20'),
		list_id: z
			.string()
			.optional()
			.describe('【非必填】翻页时建议填写前页返回的list_id值'),
		offset: z
			.number()
			.int()
			.optional()
			.describe('【非必填】从多少位置开始请求；默认值 ： 0'),
		pid: z.string().optional().describe('【非必填】推广位id'),
		risk_params: z
			.record(z.string())
			.optional()
			.describe('【非必填】风控参数'),
	},

	/**
	 * 多多进宝推广链接生成参数
	 * 接口名称：pdd.ddk.oauth.goods.prom.url.generate
	 */
	goodsPromUrlGenerate: {
		cash_gift_id: z
			.number()
			.int()
			.optional()
			.describe('【非必填】多多礼金ID'),
		cash_gift_name: z
			.string()
			.optional()
			.describe(
				'【非必填】自定义礼金标题，用于向用户展示渠道专属福利，不超过12个字'
			),
		force_duo_id: z
			.boolean()
			.optional()
			.describe('【非必填】是否使用多多客专属推广计划'),
		generate_authority_url: z
			.boolean()
			.optional()
			.describe(
				'【非必填】是否生成带授权的单品链接。如果未授权，则会走授权流程'
			),
		generate_mall_collect_coupon: z
			.boolean()
			.optional()
			.describe('【非必填】是否生成店铺收藏券推广链接'),
		generate_qq_app: z
			.boolean()
			.optional()
			.describe('【非必填】是否生成qq小程序'),
		generate_schema_url: z
			.boolean()
			.optional()
			.describe('【非必填】是否返回 schema URL'),
		generate_short_url: z
			.boolean()
			.optional()
			.describe('【非必填】是否生成短链接，true-是，false-否'),
		generate_we_app: z
			.boolean()
			.optional()
			.describe('【非必填】是否生成拼多多福利券微信小程序推广信息'),
		generate_we_app_long_link: z
			.boolean()
			.optional()
			.describe('【非必填】是否生成小程序schema长链'),
		goods_sign_list: z
			.array(z.string())
			.optional()
			.describe(
				'【非必填】商品goodsSign列表，例如：["c9r2omogKFFAc7WBwvbZU1ikIb16_J3CTa8HNN"]，支持批量生链。goodsSign是加密后的goodsId, goodsId已下线，请使用goodsSign来替代。使用说明：https://jinbao.pinduoduo.com/qa-system?questionId=252'
			),
		material_id: z
			.string()
			.optional()
			.describe('【非必填】素材ID，可以通过商品详情接口获取商品素材信息'),
		multi_group: z
			.boolean()
			.optional()
			.describe(
				'【非必填】true--生成多人团推广链接 false--生成单人团推广链接（默认false）1、单人团推广链接：用户访问单人团推广链接，可直接购买商品无需拼团。2、多人团推广链接：用户访问双人团推广链接开团，若用户分享给他人参团，则开团者和参团者的佣金均结算给推手'
			),
		search_id: z
			.string()
			.optional()
			.describe(
				'【非必填】搜索id，建议填写，提高收益。来自pdd.ddk.goods.recommend.get、pdd.ddk.goods.search、pdd.ddk.top.goods.list.query等接口'
			),
		special_params: z
			.record(z.string())
			.optional()
			.describe('【非必填】特殊参数'),
		url_type: z
			.number()
			.int()
			.optional()
			.describe('【非必填】生成商品链接类型 0-默认 1-百补相似品列表'),
	},

	/**
	 * 多多进宝转链接口参数
	 * 接口名称：pdd.ddk.oauth.goods.zs.unit.url.gen
	 */
	goodsZsUnitUrlGen: {
		source_url: z
			.string()
			.describe(
				'【必填】需转链的链接，支持拼多多商品链接、进宝长链/短链（即为pdd.ddk.goods.promotion.url.generate接口生成的长短链）'
			),
		custom_parameters: z
			.string()
			.optional()
			.describe(
				'【非必填】自定义参数，为链接打上自定义标签；自定义参数最长限制64个字节；格式为：  {"uid":"11111","sid":"22222"} ，其中 uid 用户唯一标识，可自行加密后传入，每个用户仅且对应一个标识，必填； sid 上下文信息标识，例如sessionId等，非必填。该json字符串中也可以加入其他自定义的key。（如果使用GET请求，请使用URLEncode处理参数）'
			),
		generate_schema_url: z
			.boolean()
			.optional()
			.describe('【非必填】是否返回 schema URL'),
		generate_we_app_long_link: z
			.boolean()
			.optional()
			.describe('【非必填】是否生成微信LongLink'),
		generate_short_link: z
			.boolean()
			.optional()
			.describe(
				'【非必填】是否生成微信shortlink链接，仅支持单品，单个渠道每天生成的shortLink数量有限，请合理生成shortLink链接'
			),
	},

	/**
	 * 多多进宝CMS推广链接生成参数
	 * 接口名称：pdd.ddk.oauth.cms.prom.url.generate
	 */
	cmsPromUrlGenerate: {
		channel_type: z
			.number()
			.int()
			.optional()
			.describe(
				'【非必填】0, "1.9包邮"；1, "今日爆款"； 2, "品牌清仓"； 4,"PC端专属商城(已下线,会生成默认商城)"'
			),
		generate_mobile: z
			.boolean()
			.optional()
			.describe(
				'【非必填】是否生成手机跳转链接。true-是，false-否，默认false'
			),
		generate_schema_url: z
			.boolean()
			.optional()
			.describe('【非必填】是否返回 schema URL'),
		generate_short_url: z
			.boolean()
			.optional()
			.describe('【非必填】是否生成短链接，true-是，false-否'),
		generate_we_app: z
			.boolean()
			.optional()
			.describe('【非必填】是否生成拼多多福利券微信小程序推广信息'),
		keyword: z.string().optional().describe('【非必填】搜索关键词'),
		multi_group: z
			.boolean()
			.optional()
			.describe(
				'【非必填】单人团多人团标志。true-多人团，false-单人团 默认false'
			),
	},

	/**
	 * 多多进宝PID生成参数
	 * 接口名称：pdd.ddk.oauth.goods.pid.generate
	 */
	goodsPidGenerate: {
		number: z
			.number()
			.int()
			.min(1)
			.max(100)
			.describe('【必填】要生成的推广位数量，默认为10，范围为：1~100'),
		p_id_name_list: z
			.array(z.string())
			.optional()
			.describe('【非必填】推广位名称，例如["名称1","名称2"]'),
		media_id: z.number().int().optional().describe('【非必填】媒体id'),
	},

	/**
	 * 多多进宝PID查询参数
	 * 接口名称：pdd.ddk.oauth.goods.pid.query
	 */
	goodsPidQuery: {
		page: z.number().int().optional().describe('【非必填】返回的页数'),
		page_size: z
			.number()
			.int()
			.optional()
			.describe('【非必填】返回的每页推广位数量'),
		pid_list: z
			.array(z.string())
			.optional()
			.describe('【非必填】推广位列表，例如：["60005_612"]'),
	},

	/**
	 * 多多客获取订单详情参数
	 * 接口名称：pdd.ddk.oauth.order.detail.get
	 */
	orderDetailGet: {
		order_sn: z.string().describe('【必填】订单号'),
		query_order_type: z
			.number()
			.int()
			.optional()
			.describe('【非必填】订单类型：1-推广订单；2-直播间订单'),
	},

	/**
	 * 多多客查询订单列表增量参数
	 * 接口名称：pdd.ddk.oauth.order.list.increment.get
	 */
	orderListIncrementGet: {
		end_update_time: z
			.number()
			.int()
			.describe(
				'【必填】最近24小时内多多进宝商品订单更新时间--查询时间结束。note：此时间为时间戳，指格林威治时间 1970 年01 月 01 日 00 时 00 分 00 秒(北京时间 1970 年 01 月 01 日 08 时 00 分 00 秒)起至现在的总秒数'
			),
		page: z
			.number()
			.int()
			.optional()
			.describe(
				'【非必填】第几页，从1到10000，默认1，注：使用最后更新时间范围增量同步时，必须采用倒序的分页方式（从最后一页往回取）才能避免漏单问题。'
			),
		page_size: z
			.number()
			.int()
			.min(10)
			.max(100)
			.optional()
			.describe(
				'【非必填】返回的每页结果订单数，默认为100，范围为10到100，建议使用40~50，可以提高成功率，减少超时数量。'
			),
		start_update_time: z
			.number()
			.int()
			.describe(
				'【必填】最近24小时内多多进宝商品订单更新时间--查询时间开始。note：此时间为时间戳，指格林威治时间 1970 年01 月 01 日 00 时 00 分 00 秒(北京时间 1970 年 01 月 01 日 08 时 00 分 00 秒)起至现在的总秒数'
			),
	},

	/**
	 * 多多客生成多多进宝频道推广参数
	 * 接口名称：pdd.ddk.oauth.resource.url.gen
	 */
	resourceUrlGen: {
		generate_schema_url: z
			.boolean()
			.optional()
			.describe('【非必填】是否返回 schema URL'),
		generate_we_app: z
			.boolean()
			.optional()
			.describe('【非必填】是否生成拼多多福利券微信小程序推广信息'),
		resource_type: z
			.number()
			.int()
			.optional()
			.describe(
				'【非必填】频道来源：4-限时秒杀,39997-充值中心, 39998-活动转链，39996-百亿补贴，39999-电器城，40000-领券中心，50005-火车票'
			),
		url: z.string().optional().describe('【非必填】原链接'),
	},

	/**
	 * 多多客查询是否绑定备案参数
	 * 接口名称：pdd.ddk.oauth.member.authority.query
	 */
	memberAuthorityQuery: {
		pid: z
			.string()
			.optional()
			.describe('【非必填】推广位id，如果不传则使用环境变量中的PID'),
		custom_parameters: z
			.string()
			.optional()
			.describe(
				'【非必填】自定义参数，为链接打上自定义标签；自定义参数最长限制64个字节；格式为： {"uid":"11111","sid":"22222"} ，其中 uid 用户唯一标识，可自行加密后传入，每个用户仅且对应一个标识，必填； sid 上下文信息标识，例如sessionId等，非必填。该json字符串中也可以加入其他自定义的key'
			),
	},
};
