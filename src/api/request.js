const baseUrl = 'https://www.yiban2209.press';

function request(obj) {
	let url = baseUrl + obj.url;
	let method = obj.method || 'GET';
	let data = obj.data || {}
	let successMethod = obj.success || {}; //成功后的回调
	let header = obj.header || {}
	// let token = uni.getStorageSync('token') || ''

	return new Promise((reslove, rej) => {
		uni.request({
			url: url,
			data: data,
			method: method,
			header,
			success: (res) => {
				if (res.statusCode === 200) {
					reslove(res.data)
				} else {
					uni.showToast({
						position: top,
						icon: 'none',
						title: res.statusCode,
						duration: 2000
					})
				}
			},
			fail: (err) => {
				console.log(err);
				rej(err)
			}
		})
	})

}

export default request