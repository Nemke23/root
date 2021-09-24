
jQuery(document).ready(function($){
  console.log('aaa');
  // Dynamic Content
  const dynamicContent = {
      header: document.querySelector('#heading'),
      firstpar: document.querySelector('#firstpar'),
     header2: document.querySelector('#heading2'),
     secondpar: document.querySelector('#para2'),
      image:document.querySelector('#mainimage')
  };
  // Keyword values to insert
  const keywordList = {
  
    'potland_vp1_clutter_non_localized': {
      header: "Declutter your home or office with recycling on demand.",
      firstpar:"Do you have recycling piling up? Are you running out of space? Rethink your recycling with Recyclops, an on-demand service that picks up your recycling where and when you need it.",
      header2:"Why is this important to Portland?",
      secondpar:"You can help Portland hit its goal to recycle 70% of waste with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
        'portland_vp1_clutter_localized': {
      header: "Declutter your home or office with recycling on demand.",
      firstpar:"Do you have recycling piling up? Are you running out of space? Rethink your recycling with Recyclops, an on-demand service that picks up your recycling where and when you need it.",
      header2:"Why is this important to Portland?",
      secondpar:"You can help Portland hit its goal to recycle 70% of waste with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'portland_vp2_waste_non_localized': {
      header: "Declutter your home or office with recycling on demand.",
      firstpar:"Do you have recycling piling up? Are you running out of space? Rethink your recycling with Recyclops, an on-demand service that picks up your recycling where and when you need it.",
      header2:"Why is this important to Portland?",
      secondpar:"You can help Portland hit its goal to recycle 70% of waste with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'portland_vp2_waste_localized': {
      header: "Declutter your home or office with recycling on demand.",
      firstpar:"Do you have recycling piling up? Are you running out of space? Rethink your recycling with Recyclops, an on-demand service that picks up your recycling where and when you need it.",
      header2:"Why is this important to Portland?",
      secondpar:"You can help Portland hit its goal to recycle 70% of waste with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'portland_vp3_convenience_non_localized': {
      header: "Declutter your home or office with recycling on demand.",
      firstpar:"Do you have recycling piling up? Are you running out of space? Rethink your recycling with Recyclops, an on-demand service that picks up your recycling where and when you need it.",
      header2:"Why is this important to Portland?",
      secondpar:"You can help Portland hit its goal to recycle 70% of waste with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'portland_vp3_convenience_localized': {
      header: "Declutter your home or office with recycling on demand.",
      firstpar:"Do you have recycling piling up? Are you running out of space? Rethink your recycling with Recyclops, an on-demand service that picks up your recycling where and when you need it.",
      header2:"Why is this important to Portland?",
      secondpar:"You can help Portland hit its goal to recycle 70% of waste with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'portland_vp4_confusion_non_localized': {
      header: "Declutter your home or office with recycling on demand.",
      firstpar:"Do you have recycling piling up? Are you running out of space? Rethink your recycling with Recyclops, an on-demand service that picks up your recycling where and when you need it.",
      header2:"Why is this important to Portland?",
      secondpar:"You can help Portland hit its goal to recycle 70% of waste with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      'portland_vp4_confusion_localized': {
      header: "Declutter your home or office with recycling on demand.",
      firstpar:"Do you have recycling piling up? Are you running out of space? Rethink your recycling with Recyclops, an on-demand service that picks up your recycling where and when you need it.",
      header2:"Why is this important to Portland?",
      secondpar:"You can help Portland hit its goal to recycle 70% of waste with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      'portland_vp5_bigbulky_non_localized': {
      header: "Declutter your home or office with recycling on demand.",
      firstpar:"Do you have recycling piling up? Are you running out of space? Rethink your recycling with Recyclops, an on-demand service that picks up your recycling where and when you need it.",
      header2:"Why is this important to Portland?",
      secondpar:"You can help Portland hit its goal to recycle 70% of waste with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      'portland_vp5_bigbulky_localized': {
      header: "Declutter your home or office with recycling on demand.",
      firstpar:"Do you have recycling piling up? Are you running out of space? Rethink your recycling with Recyclops, an on-demand service that picks up your recycling where and when you need it.",
      header2:"Why is this important to Portland?",
      secondpar:"You can help Portland hit its goal to recycle 70% of waste with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      'portland_vp6_hardrecycle_non_localized': {
      header: "Declutter your home or office with recycling on demand.",
      firstpar:"Do you have recycling piling up? Are you running out of space? Rethink your recycling with Recyclops, an on-demand service that picks up your recycling where and when you need it.",
      header2:"Why is this important to Portland?",
      secondpar:"You can help Portland hit its goal to recycle 70% of waste with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      'portland_vp6_hardrecycle_localized': {
      header: "Declutter your home or office with recycling on demand.",
      firstpar:"Do you have recycling piling up? Are you running out of space? Rethink your recycling with Recyclops, an on-demand service that picks up your recycling where and when you need it.",
      header2:"Why is this important to Portland?",
      secondpar:"You can help Portland hit its goal to recycle 70% of waste with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'seattle_vp1_clutter_non_localized': {
      header: "Skip the sorting with recycling on demand.",
      firstpar:"Do recycling rules confuse you? From cans, cardboard, plastics and metal, do you find it hard knowing how to deal with it all? Rethink your recycling with Recyclops, an on-demand service that sorts and delivers your recycling for you.",
      header2:"Why is this important to Seattle? ",
      secondpar:"You can help Seattle reach its goal to recycle 70% of waste with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'seattle_vp1_clutter_localized': {
      header: "Skip the sorting with recycling on demand.",
      firstpar:"Do recycling rules confuse you? From cans, cardboard, plastics and metal, do you find it hard knowing how to deal with it all? Rethink your recycling with Recyclops, an on-demand service that sorts and delivers your recycling for you.",
      header2:"Why is this important to Seattle? ",
      secondpar:"You can help Seattle reach its goal to recycle 70% of waste with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'seattle_vp2_waste_non_localized': {
      header: "Skip the sorting with recycling on demand.",
      firstpar:"Do recycling rules confuse you? From cans, cardboard, plastics and metal, do you find it hard knowing how to deal with it all? Rethink your recycling with Recyclops, an on-demand service that sorts and delivers your recycling for you.",
      header2:"Why is this important to Seattle? ",
      secondpar:"You can help Seattle reach its goal to recycle 70% of waste with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'seattle_vp2_waste_localized': {
      header: "Skip the sorting with recycling on demand.",
      firstpar:"Do recycling rules confuse you? From cans, cardboard, plastics and metal, do you find it hard knowing how to deal with it all? Rethink your recycling with Recyclops, an on-demand service that sorts and delivers your recycling for you.",
      header2:"Why is this important to Seattle? ",
      secondpar:"You can help Seattle reach its goal to recycle 70% of waste with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'seattle_vp3_convenience_non_localized': {
      header: "Skip the sorting with recycling on demand.",
      firstpar:"Do recycling rules confuse you? From cans, cardboard, plastics and metal, do you find it hard knowing how to deal with it all? Rethink your recycling with Recyclops, an on-demand service that sorts and delivers your recycling for you.",
      header2:"Why is this important to Seattle? ",
      secondpar:"You can help Seattle reach its goal to recycle 70% of waste with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'seattle_vp3_convenience_localized': {
      header: "Skip the sorting with recycling on demand.",
      firstpar:"Do recycling rules confuse you? From cans, cardboard, plastics and metal, do you find it hard knowing how to deal with it all? Rethink your recycling with Recyclops, an on-demand service that sorts and delivers your recycling for you.",
      header2:"Why is this important to Seattle? ",
      secondpar:"You can help Seattle reach its goal to recycle 70% of waste with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'seattle_vp4_confusion_non_localized': {
      header: "Skip the sorting with recycling on demand.",
      firstpar:"Do recycling rules confuse you? From cans, cardboard, plastics and metal, do you find it hard knowing how to deal with it all? Rethink your recycling with Recyclops, an on-demand service that sorts and delivers your recycling for you.",
      header2:"Why is this important to Seattle? ",
      secondpar:"You can help Seattle reach its goal to recycle 70% of waste with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'seattle_vp4_confusion_localized': {
      header: "Skip the sorting with recycling on demand.",
      firstpar:"Do recycling rules confuse you? From cans, cardboard, plastics and metal, do you find it hard knowing how to deal with it all? Rethink your recycling with Recyclops, an on-demand service that sorts and delivers your recycling for you.",
      header2:"Why is this important to Seattle? ",
      secondpar:"You can help Seattle reach its goal to recycle 70% of waste with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'seattle_vp5_bigbulky_non_localized': {
      header: "Skip the sorting with recycling on demand.",
      firstpar:"Do recycling rules confuse you? From cans, cardboard, plastics and metal, do you find it hard knowing how to deal with it all? Rethink your recycling with Recyclops, an on-demand service that sorts and delivers your recycling for you.",
      header2:"Why is this important to Seattle? ",
      secondpar:"You can help Seattle reach its goal to recycle 70% of waste with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'seattle_vp5_bigbulky_localized': {
      header: "Skip the sorting with recycling on demand.",
      firstpar:"Do recycling rules confuse you? From cans, cardboard, plastics and metal, do you find it hard knowing how to deal with it all? Rethink your recycling with Recyclops, an on-demand service that sorts and delivers your recycling for you.",
      header2:"Why is this important to Seattle? ",
      secondpar:"You can help Seattle reach its goal to recycle 70% of waste with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'seattle_vp6_hardrecycle_non_localized': {
      header: "Skip the sorting with recycling on demand.",
      firstpar:"Do recycling rules confuse you? From cans, cardboard, plastics and metal, do you find it hard knowing how to deal with it all? Rethink your recycling with Recyclops, an on-demand service that sorts and delivers your recycling for you.",
      header2:"Why is this important to Seattle? ",
      secondpar:"You can help Seattle reach its goal to recycle 70% of waste with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'seattle_vp6_hardrecycle_localized': {
      header: "Skip the sorting with recycling on demand.",
      firstpar:"Do recycling rules confuse you? From cans, cardboard, plastics and metal, do you find it hard knowing how to deal with it all? Rethink your recycling with Recyclops, an on-demand service that sorts and delivers your recycling for you.",
      header2:"Why is this important to Seattle? ",
      secondpar:"You can help Seattle reach its goal to recycle 70% of waste with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'chicago_vp1_clutter_non_localized': {
      header: "Get rid of hard-to-recycle items with recycling on demand.",
      firstpar:"Do you have electronics, clothing, compost or glass you want to dispose of? Want to keep them out of landfills? Rethink your recylcing with Recyclops, an on-demand recycling service that recycles what others won't.",
      header2:"Why is this important to Chicago? ",
      secondpar:"You can help Chicago reach its goal to reduce what goes into landfills with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'chicago_vp1_clutter_localized': {
      header: "Get rid of hard-to-recycle items with recycling on demand.",
      firstpar:"Do you have electronics, clothing, compost or glass you want to dispose of? Want to keep them out of landfills? Rethink your recylcing with Recyclops, an on-demand recycling service that recycles what others won't.",
      header2:"Why is this important to Chicago? ",
      secondpar:"You can help Chicago reach its goal to reduce what goes into landfills with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'chicago_vp2_waste_non_localized': {
      header: "Get rid of hard-to-recycle items with recycling on demand.",
      firstpar:"Do you have electronics, clothing, compost or glass you want to dispose of? Want to keep them out of landfills? Rethink your recylcing with Recyclops, an on-demand recycling service that recycles what others won't.",
      header2:"Why is this important to Chicago? ",
      secondpar:"You can help Chicago reach its goal to reduce what goes into landfills with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'chicago_vp2_waste_localized': {
      header: "Get rid of hard-to-recycle items with recycling on demand.",
      firstpar:"Do you have electronics, clothing, compost or glass you want to dispose of? Want to keep them out of landfills? Rethink your recylcing with Recyclops, an on-demand recycling service that recycles what others won't.",
      header2:"Why is this important to Chicago? ",
      secondpar:"You can help Chicago reach its goal to reduce what goes into landfills with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'chicago_vp3_convenience_non_localized': {
      header: "Get rid of hard-to-recycle items with recycling on demand.",
      firstpar:"Do you have electronics, clothing, compost or glass you want to dispose of? Want to keep them out of landfills? Rethink your recylcing with Recyclops, an on-demand recycling service that recycles what others won't.",
      header2:"Why is this important to Chicago? ",
      secondpar:"You can help Chicago reach its goal to reduce what goes into landfills with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'chicago_vp3_convenience_localized': {
      header: "Get rid of hard-to-recycle items with recycling on demand.",
      firstpar:"Do you have electronics, clothing, compost or glass you want to dispose of? Want to keep them out of landfills? Rethink your recylcing with Recyclops, an on-demand recycling service that recycles what others won't.",
      header2:"Why is this important to Chicago? ",
      secondpar:"You can help Chicago reach its goal to reduce what goes into landfills with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'chicago_vp4_confusion_non_localized': {
      header: "Get rid of hard-to-recycle items with recycling on demand.",
      firstpar:"Do you have electronics, clothing, compost or glass you want to dispose of? Want to keep them out of landfills? Rethink your recylcing with Recyclops, an on-demand recycling service that recycles what others won't.",
      header2:"Why is this important to Chicago? ",
      secondpar:"You can help Chicago reach its goal to reduce what goes into landfills with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      'chicago_vp4_confusion_localized': {
      header: "Get rid of hard-to-recycle items with recycling on demand.",
      firstpar:"Do you have electronics, clothing, compost or glass you want to dispose of? Want to keep them out of landfills? Rethink your recylcing with Recyclops, an on-demand recycling service that recycles what others won't.",
      header2:"Why is this important to Chicago? ",
      secondpar:"You can help Chicago reach its goal to reduce what goes into landfills with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      'chicago_vp5_bigbulky_non_localized': {
      header: "Get rid of hard-to-recycle items with recycling on demand.",
      firstpar:"Do you have electronics, clothing, compost or glass you want to dispose of? Want to keep them out of landfills? Rethink your recylcing with Recyclops, an on-demand recycling service that recycles what others won't.",
      header2:"Why is this important to Chicago? ",
      secondpar:"You can help Chicago reach its goal to reduce what goes into landfills with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      'chicago_vp5_bigbulky_localized': {
      header: "Get rid of hard-to-recycle items with recycling on demand.",
      firstpar:"Do you have electronics, clothing, compost or glass you want to dispose of? Want to keep them out of landfills? Rethink your recylcing with Recyclops, an on-demand recycling service that recycles what others won't.",
      header2:"Why is this important to Chicago? ",
      secondpar:"You can help Chicago reach its goal to reduce what goes into landfills with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'chicago_vp6_hardrecycle_non_localized': {
      header: "Get rid of hard-to-recycle items with recycling on demand.",
      firstpar:"Do you have electronics, clothing, compost or glass you want to dispose of? Want to keep them out of landfills? Rethink your recylcing with Recyclops, an on-demand recycling service that recycles what others won't.",
      header2:"Why is this important to Chicago? ",
      secondpar:"You can help Chicago reach its goal to reduce what goes into landfills with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      'chicago_vp6_hardrecycle_localized': {
      header: "Get rid of hard-to-recycle items with recycling on demand.",
      firstpar:"Do you have electronics, clothing, compost or glass you want to dispose of? Want to keep them out of landfills? Rethink your recylcing with Recyclops, an on-demand recycling service that recycles what others won't.",
      header2:"Why is this important to Chicago? ",
      secondpar:"You can help Chicago reach its goal to reduce what goes into landfills with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'sanjose_vp1_clutter_non_localized': {
      header: "Get rid of big and bulky items with recycling on demand.",
      firstpar:"Do you have big bulky boxes? Tired of cutting them up or carting them away on your own? Rethink your recycling with Recyclops, an on-demand service to reduce waste and recycle right.",
      header2:"Why is this important to San Jose? ",
      secondpar:"You can help San Jose reach its zero waste goal by 2022 with Recyclops. Make your impact today! ",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'sanjose_vp1_clutter_localized': {
      header: "Get rid of big and bulky items with recycling on demand.",
      firstpar:"Do you have big bulky boxes? Tired of cutting them up or carting them away on your own? Rethink your recycling with Recyclops, an on-demand service to reduce waste and recycle right.",
      header2:"Why is this important to San Jose? ",
      secondpar:"You can help San Jose reach its zero waste goal by 2022 with Recyclops. Make your impact today! ",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'sanjose_vp2_waste_non_localized': {
      header: "Get rid of big and bulky items with recycling on demand.",
      firstpar:"Do you have big bulky boxes? Tired of cutting them up or carting them away on your own? Rethink your recycling with Recyclops, an on-demand service to reduce waste and recycle right.",
      header2:"Why is this important to San Jose? ",
      secondpar:"You can help San Jose reach its zero waste goal by 2022 with Recyclops. Make your impact today! ",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'sanjose_vp2_waste_localized': {
      header: "Get rid of big and bulky items with recycling on demand.",
      firstpar:"Do you have big bulky boxes? Tired of cutting them up or carting them away on your own? Rethink your recycling with Recyclops, an on-demand service to reduce waste and recycle right.",
      header2:"Why is this important to San Jose? ",
      secondpar:"You can help San Jose reach its zero waste goal by 2022 with Recyclops. Make your impact today! ",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'sanjose_vp3_convenience_non_localized': {
      header: "Get rid of big and bulky items with recycling on demand.",
      firstpar:"Do you have big bulky boxes? Tired of cutting them up or carting them away on your own? Rethink your recycling with Recyclops, an on-demand service to reduce waste and recycle right.",
      header2:"Why is this important to San Jose? ",
      secondpar:"You can help San Jose reach its zero waste goal by 2022 with Recyclops. Make your impact today! ",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'sanjose_vp3_convenience_localized': {
      header: "Get rid of big and bulky items with recycling on demand.",
      firstpar:"Do you have big bulky boxes? Tired of cutting them up or carting them away on your own? Rethink your recycling with Recyclops, an on-demand service to reduce waste and recycle right.",
      header2:"Why is this important to San Jose? ",
      secondpar:"You can help San Jose reach its zero waste goal by 2022 with Recyclops. Make your impact today! ",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'sanjose_vp4_confusion_non_localized': {
      header: "Get rid of big and bulky items with recycling on demand.",
      firstpar:"Do you have big bulky boxes? Tired of cutting them up or carting them away on your own? Rethink your recycling with Recyclops, an on-demand service to reduce waste and recycle right.",
      header2:"Why is this important to San Jose? ",
      secondpar:"You can help San Jose reach its zero waste goal by 2022 with Recyclops. Make your impact today! ",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      'sanjose_vp4_confusion_localized': {
      header: "Get rid of big and bulky items with recycling on demand.",
      firstpar:"Do you have big bulky boxes? Tired of cutting them up or carting them away on your own? Rethink your recycling with Recyclops, an on-demand service to reduce waste and recycle right.",
      header2:"Why is this important to San Jose? ",
      secondpar:"You can help San Jose reach its zero waste goal by 2022 with Recyclops. Make your impact today! ",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'sanjose_vp5_bigbulky_non_localized': {
      header: "Get rid of big and bulky items with recycling on demand.",
      firstpar:"Do you have big bulky boxes? Tired of cutting them up or carting them away on your own? Rethink your recycling with Recyclops, an on-demand service to reduce waste and recycle right.",
      header2:"Why is this important to San Jose? ",
      secondpar:"You can help San Jose reach its zero waste goal by 2022 with Recyclops. Make your impact today! ",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'sanjose_vp5_bigbulky_localized': {
      header: "Get rid of big and bulky items with recycling on demand.",
      firstpar:"Do you have big bulky boxes? Tired of cutting them up or carting them away on your own? Rethink your recycling with Recyclops, an on-demand service to reduce waste and recycle right.",
      header2:"Why is this important to San Jose? ",
      secondpar:"You can help San Jose reach its zero waste goal by 2022 with Recyclops. Make your impact today! ",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'sanjose_vp6_hardrecycle_non_localized': {
      header: "Get rid of big and bulky items with recycling on demand.",
      firstpar:"Do you have big bulky boxes? Tired of cutting them up or carting them away on your own? Rethink your recycling with Recyclops, an on-demand service to reduce waste and recycle right.",
      header2:"Why is this important to San Jose? ",
      secondpar:"You can help San Jose reach its zero waste goal by 2022 with Recyclops. Make your impact today! ",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      'sanjose_vp6_hardrecycle_localized': {
      header: "Get rid of big and bulky items with recycling on demand.",
      firstpar:"Do you have big bulky boxes? Tired of cutting them up or carting them away on your own? Rethink your recycling with Recyclops, an on-demand service to reduce waste and recycle right.",
      header2:"Why is this important to San Jose? ",
      secondpar:"You can help San Jose reach its zero waste goal by 2022 with Recyclops. Make your impact today! ",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'sandiego_vp1_clutter_non_localized': {
      header: "Get curbside pickup with recycling on demand.",
      firstpar:"Do you have a recycling center near you? Is it easy to get to? Do you have time to go there? Rethink your recylcing with Recyclops, an on-demand service that picks up your recycling anytime you need it.",
      header2:"Why is this important to San Diego? ",
      secondpar:"You can help San Diego divert 90% of waste from landfills by 2035 with Recyclops. Make your impact today! ",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'sandiego_vp1_clutter_localized': {
      header: "Get curbside pickup with recycling on demand.",
      firstpar:"Do you have a recycling center near you? Is it easy to get to? Do you have time to go there? Rethink your recylcing with Recyclops, an on-demand service that picks up your recycling anytime you need it.",
      header2:"Why is this important to San Diego? ",
      secondpar:"You can help San Diego divert 90% of waste from landfills by 2035 with Recyclops. Make your impact today! ",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      'sandiego_vp2_waste_non_localized': {
      header: "Get curbside pickup with recycling on demand.",
      firstpar:"Do you have a recycling center near you? Is it easy to get to? Do you have time to go there? Rethink your recylcing with Recyclops, an on-demand service that picks up your recycling anytime you need it.",
      header2:"Why is this important to San Diego? ",
      secondpar:"You can help San Diego divert 90% of waste from landfills by 2035 with Recyclops. Make your impact today! ",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      'sandiego_vp2_waste_localized': {
      header: "Get curbside pickup with recycling on demand.",
      firstpar:"Do you have a recycling center near you? Is it easy to get to? Do you have time to go there? Rethink your recylcing with Recyclops, an on-demand service that picks up your recycling anytime you need it.",
      header2:"Why is this important to San Diego? ",
      secondpar:"You can help San Diego divert 90% of waste from landfills by 2035 with Recyclops. Make your impact today! ",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      'sandiego_vp3_convenience_non_localized': {
      header: "Get curbside pickup with recycling on demand.",
      firstpar:"Do you have a recycling center near you? Is it easy to get to? Do you have time to go there? Rethink your recylcing with Recyclops, an on-demand service that picks up your recycling anytime you need it.",
      header2:"Why is this important to San Diego? ",
      secondpar:"You can help San Diego divert 90% of waste from landfills by 2035 with Recyclops. Make your impact today! ",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      'sandiego_vp3_convenience_localized': {
      header: "Get curbside pickup with recycling on demand.",
      firstpar:"Do you have a recycling center near you? Is it easy to get to? Do you have time to go there? Rethink your recylcing with Recyclops, an on-demand service that picks up your recycling anytime you need it.",
      header2:"Why is this important to San Diego? ",
      secondpar:"You can help San Diego divert 90% of waste from landfills by 2035 with Recyclops. Make your impact today! ",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      'sandiego_vp4_confusion_non_localized': {
      header: "Get curbside pickup with recycling on demand.",
      firstpar:"Do you have a recycling center near you? Is it easy to get to? Do you have time to go there? Rethink your recylcing with Recyclops, an on-demand service that picks up your recycling anytime you need it.",
      header2:"Why is this important to San Diego? ",
      secondpar:"You can help San Diego divert 90% of waste from landfills by 2035 with Recyclops. Make your impact today! ",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      'sandiego_vp4_confusion_localized': {
      header: "Get curbside pickup with recycling on demand.",
      firstpar:"Do you have a recycling center near you? Is it easy to get to? Do you have time to go there? Rethink your recylcing with Recyclops, an on-demand service that picks up your recycling anytime you need it.",
      header2:"Why is this important to San Diego? ",
      secondpar:"You can help San Diego divert 90% of waste from landfills by 2035 with Recyclops. Make your impact today! ",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      'sandiego_vp5_bigbulky_non_localized': {
      header: "Get curbside pickup with recycling on demand.",
      firstpar:"Do you have a recycling center near you? Is it easy to get to? Do you have time to go there? Rethink your recylcing with Recyclops, an on-demand service that picks up your recycling anytime you need it.",
      header2:"Why is this important to San Diego? ",
      secondpar:"You can help San Diego divert 90% of waste from landfills by 2035 with Recyclops. Make your impact today! ",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      'sandiego_vp5_bigbulky_localized': {
      header: "Get curbside pickup with recycling on demand.",
      firstpar:"Do you have a recycling center near you? Is it easy to get to? Do you have time to go there? Rethink your recylcing with Recyclops, an on-demand service that picks up your recycling anytime you need it.",
      header2:"Why is this important to San Diego? ",
      secondpar:"You can help San Diego divert 90% of waste from landfills by 2035 with Recyclops. Make your impact today! ",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      'sandiego_vp6_hardrecycle_non_localized': {
      header: "Get curbside pickup with recycling on demand.",
      firstpar:"Do you have a recycling center near you? Is it easy to get to? Do you have time to go there? Rethink your recylcing with Recyclops, an on-demand service that picks up your recycling anytime you need it.",
      header2:"Why is this important to San Diego? ",
      secondpar:"You can help San Diego divert 90% of waste from landfills by 2035 with Recyclops. Make your impact today! ",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      
      'sandiego_vp6_hardrecycle_localized': {
      header: "Get curbside pickup with recycling on demand.",
      firstpar:"Do you have a recycling center near you? Is it easy to get to? Do you have time to go there? Rethink your recylcing with Recyclops, an on-demand service that picks up your recycling anytime you need it.",
      header2:"Why is this important to San Diego? ",
      secondpar:"You can help San Diego divert 90% of waste from landfills by 2035 with Recyclops. Make your impact today! ",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
        'sf_vp1_clutter_non_localized': {
      header: "Win the war on waste with recycling on demand.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to San Francisco? ",
      secondpar:"You can help San Francisco lessen what goes into landfills with Recyclops. Make your impact today! ",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'sf_vp1_clutter_localized': {
      header: "Win the war on waste with recycling on demand.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to San Francisco? ",
      secondpar:"You can help San Francisco lessen what goes into landfills with Recyclops. Make your impact today! ",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      'sf_vp2_waste_non_localized': {
      header: "Win the war on waste with recycling on demand.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to San Francisco? ",
      secondpar:"You can help San Francisco lessen what goes into landfills with Recyclops. Make your impact today! ",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      'sf_vp2_waste_localized': {
      header: "Win the war on waste with recycling on demand.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to San Francisco? ",
      secondpar:"You can help San Francisco lessen what goes into landfills with Recyclops. Make your impact today! ",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      'sf_vp3_convenience_non_localized': {
      header: "Win the war on waste with recycling on demand.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to San Francisco? ",
      secondpar:"You can help San Francisco lessen what goes into landfills with Recyclops. Make your impact today! ",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      'sf_vp3_convenience_localized': {
      header: "Win the war on waste with recycling on demand.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to San Francisco? ",
      secondpar:"You can help San Francisco lessen what goes into landfills with Recyclops. Make your impact today! ",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      'sf_vp4_confusion_non_localized': {
      header: "Win the war on waste with recycling on demand.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to San Francisco? ",
      secondpar:"You can help San Francisco lessen what goes into landfills with Recyclops. Make your impact today! ",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      'sf_vp4_confusion_localized': {
      header: "Win the war on waste with recycling on demand.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to San Francisco? ",
      secondpar:"You can help San Francisco lessen what goes into landfills with Recyclops. Make your impact today! ",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      'sf_vp5_bigbulky_non_localized': {
      header: "Win the war on waste with recycling on demand.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to San Francisco? ",
      secondpar:"You can help San Francisco lessen what goes into landfills with Recyclops. Make your impact today! ",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'sf_vp5_bigbulky_localized': {
      header: "Win the war on waste with recycling on demand.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to San Francisco? ",
      secondpar:"You can help San Francisco lessen what goes into landfills with Recyclops. Make your impact today! ",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'sf_vp6_hardrecycle_non_localized': {
      header: "Win the war on waste with recycling on demand.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to San Francisco? ",
      secondpar:"You can help San Francisco lessen what goes into landfills with Recyclops. Make your impact today! ",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      'sf_vp6_hardrecycle_localized': {
      header: "Win the war on waste with recycling on demand.",
      firstpar:"Do your cans, cartons and plastics pile up? Do you worry about where it all really goes? Rethink your recycling with Recyclops, an on-demand service that picks up your recycling where and when you need it.",
      header2:"Why is this important to San Francisco? ",
      secondpar:"You can help San Francisco lessen what goes into landfills with Recyclops. Make your impact today! ",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'la_vp1_clutter_non_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Los Angeles?",
      secondpar:"You can help Los Angeles divert 90% of waste from landfills by 2025 with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'la_vp1_clutter_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Los Angeles?",
      secondpar:"You can help Los Angeles divert 90% of waste from landfills by 2025 with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'la_vp2_waste_non_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Los Angeles?",
      secondpar:"You can help Los Angeles divert 90% of waste from landfills by 2025 with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      'la_vp2_waste_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Los Angeles?",
      secondpar:"You can help Los Angeles divert 90% of waste from landfills by 2025 with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      'la_vp3_convenience_non_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Los Angeles?",
      secondpar:"You can help Los Angeles divert 90% of waste from landfills by 2025 with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      'la_vp3_convenience_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Los Angeles?",
      secondpar:"You can help Los Angeles divert 90% of waste from landfills by 2025 with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      'la_vp4_confusion_non_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Los Angeles?",
      secondpar:"You can help Los Angeles divert 90% of waste from landfills by 2025 with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      'la_vp4_confusion_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Los Angeles?",
      secondpar:"You can help Los Angeles divert 90% of waste from landfills by 2025 with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      
      'la_vp5_bigbulky_non_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Los Angeles?",
      secondpar:"You can help Los Angeles divert 90% of waste from landfills by 2025 with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      'la_vp5_bigbulky_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Los Angeles?",
      secondpar:"You can help Los Angeles divert 90% of waste from landfills by 2025 with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      
      'la_vp6_hardrecycle_non_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Los Angeles?",
      secondpar:"You can help Los Angeles divert 90% of waste from landfills by 2025 with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      
      'la_vp6_hardrecycle_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Los Angeles?",
      secondpar:"You can help Los Angeles divert 90% of waste from landfills by 2025 with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'jacksonville_vp1_clutter_non_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Jacksonville?",
      secondpar:"You can help Jacksonville lessen what goes into landfills with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'jacksonville_vp1_clutter_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Jacksonville?",
      secondpar:"You can help Jacksonville lessen what goes into landfills with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'jacksonville_vp2_waste_non_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Jacksonville?",
      secondpar:"You can help Jacksonville lessen what goes into landfills with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      'jacksonville_vp2_waste_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Jacksonville?",
      secondpar:"You can help Jacksonville lessen what goes into landfills with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      'jacksonville_vp3_convenience_non_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Jacksonville?",
      secondpar:"You can help Jacksonville lessen what goes into landfills with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      'jacksonville_vp3_convenience_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Jacksonville?",
      secondpar:"You can help Jacksonville lessen what goes into landfills with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      'jacksonville_vp4_confusion_non_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Jacksonville?",
      secondpar:"You can help Jacksonville lessen what goes into landfills with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      'jacksonville_vp4_confusion_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Jacksonville?",
      secondpar:"You can help Jacksonville lessen what goes into landfills with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      'jacksonville_vp5_bigbulky_non_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Jacksonville?",
      secondpar:"You can help Jacksonville lessen what goes into landfills with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      'jacksonville_vp5_bigbulky_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Jacksonville?",
      secondpar:"You can help Jacksonville lessen what goes into landfills with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      'jacksonville_vp6_hardrecycle_non_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Jacksonville?",
      secondpar:"You can help Jacksonville lessen what goes into landfills with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      'jacksonville_vp6_hardrecycle_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Jacksonville?",
      secondpar:"You can help Jacksonville lessen what goes into landfills with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'baltimore_vp1_clutter_non_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Baltimore?",
      secondpar:"You can help Baltimore lessen what goes into landfills with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'baltimore_vp1_clutter_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Baltimore?",
      secondpar:"You can help Baltimore lessen what goes into landfills with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      
      'baltimore_vp2_waste_non_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Baltimore?",
      secondpar:"You can help Baltimore lessen what goes into landfills with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      
      'baltimore_vp2_waste_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Baltimore?",
      secondpar:"You can help Baltimore lessen what goes into landfills with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      
      'baltimore_vp3_convenience_non_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Baltimore?",
      secondpar:"You can help Baltimore lessen what goes into landfills with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      
      'baltimore_vp3_convenience_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Baltimore?",
      secondpar:"You can help Baltimore lessen what goes into landfills with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      
      'baltimore_vp4_confusion_non_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Baltimore?",
      secondpar:"You can help Baltimore lessen what goes into landfills with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      
      'baltimore_vp4_confusion_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Baltimore?",
      secondpar:"You can help Baltimore lessen what goes into landfills with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      
      'baltimore_vp5_bigbulky_non_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Baltimore?",
      secondpar:"You can help Baltimore lessen what goes into landfills with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      
      'baltimore_vp5_bigbulky_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Baltimore?",
      secondpar:"You can help Baltimore lessen what goes into landfills with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      
      'baltimore_vp6_hardrecycle_non_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Baltimore?",
      secondpar:"You can help Baltimore lessen what goes into landfills with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      
      'baltimore_vp6_hardrecycle_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Baltimore?",
      secondpar:"You can help Baltimore lessen what goes into landfills with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
       'philadelphia_vp1_clutter_non_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Philadelphia?",
      secondpar:"You can help Philadelphia reach its goal to stop using landfill and conventional incinerators by 2035 with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'philadelphia_vp1_clutter_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Philadelphia?",
      secondpar:"You can help Philadelphia reach its goal to stop using landfill and conventional incinerators by 2035 with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'philadelphia_vp2_waste_non_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Philadelphia?",
      secondpar:"You can help Philadelphia reach its goal to stop using landfill and conventional incinerators by 2035 with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'philadelphia_vp2_waste_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Philadelphia?",
      secondpar:"You can help Philadelphia reach its goal to stop using landfill and conventional incinerators by 2035 with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      'philadelphia_vp3_convenience_non_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Philadelphia?",
      secondpar:"You can help Philadelphia reach its goal to stop using landfill and conventional incinerators by 2035 with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'philadelphia_vp3_convenience_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Philadelphia?",
      secondpar:"You can help Philadelphia reach its goal to stop using landfill and conventional incinerators by 2035 with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'philadelphia_vp4_confusion_non_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Philadelphia?",
      secondpar:"You can help Philadelphia reach its goal to stop using landfill and conventional incinerators by 2035 with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'philadelphia_vp4_confusion_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Philadelphia?",
      secondpar:"You can help Philadelphia reach its goal to stop using landfill and conventional incinerators by 2035 with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'philadelphia_vp5_bigbulky_non_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Philadelphia?",
      secondpar:"You can help Philadelphia reach its goal to stop using landfill and conventional incinerators by 2035 with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'philadelphia_vp5_bigbulky_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Philadelphia?",
      secondpar:"You can help Philadelphia reach its goal to stop using landfill and conventional incinerators by 2035 with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      'philadelphia_vp6_hardrecycle_non_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Philadelphia?",
      secondpar:"You can help Philadelphia reach its goal to stop using landfill and conventional incinerators by 2035 with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      'philadelphia_vp6_hardrecycle_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Philadelphia?",
      secondpar:"You can help Philadelphia reach its goal to stop using landfill and conventional incinerators by 2035 with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'indianapolis_vp1_clutter_non_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Indianapolis?",
      secondpar:"You can help Indianapolis reach its goal of universal curbside recycling by 2025 with Recyclops.Make your impact today!  ",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'indianapolis_vp1_clutter_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Indianapolis?",
      secondpar:"You can help Indianapolis reach its goal of universal curbside recycling by 2025 with Recyclops.Make your impact today!  ",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'indianapolis_vp2_waste_non_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Indianapolis?",
      secondpar:"You can help Indianapolis reach its goal of universal curbside recycling by 2025 with Recyclops.Make your impact today!  ",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'indianapolis_vp2_waste_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Indianapolis?",
      secondpar:"You can help Indianapolis reach its goal of universal curbside recycling by 2025 with Recyclops.Make your impact today!  ",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'indianapolis_vp3_convenience_non_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Indianapolis?",
      secondpar:"You can help Indianapolis reach its goal of universal curbside recycling by 2025 with Recyclops.Make your impact today!  ",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'indianapolis_vp3_convenience_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Indianapolis?",
      secondpar:"You can help Indianapolis reach its goal of universal curbside recycling by 2025 with Recyclops.Make your impact today!  ",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'indianapolis_vp4_confusion_non_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Indianapolis?",
      secondpar:"You can help Indianapolis reach its goal of universal curbside recycling by 2025 with Recyclops.Make your impact today!  ",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'indianapolis_vp4_confusion_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Indianapolis?",
      secondpar:"You can help Indianapolis reach its goal of universal curbside recycling by 2025 with Recyclops.Make your impact today!  ",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      'indianapolis_vp5_bigbulky_non_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Indianapolis?",
      secondpar:"You can help Indianapolis reach its goal of universal curbside recycling by 2025 with Recyclops.Make your impact today!  ",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'indianapolis_vp5_bigbulky_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Indianapolis?",
      secondpar:"You can help Indianapolis reach its goal of universal curbside recycling by 2025 with Recyclops.Make your impact today!  ",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'indianapolis_vp6_hardrecycle_non_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Indianapolis?",
      secondpar:"You can help Indianapolis reach its goal of universal curbside recycling by 2025 with Recyclops.Make your impact today!  ",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'indianapolis_vp6_hardrecycle_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Indianapolis?",
      secondpar:"You can help Indianapolis reach its goal of universal curbside recycling by 2025 with Recyclops.Make your impact today!  ",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'houston_vp1_clutter_non_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Houston?",
      secondpar:"You can help Houston keep millions of pounds of recyclables out of landfills with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      'houston_vp1_clutter_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Houston?",
      secondpar:"You can help Houston keep millions of pounds of recyclables out of landfills with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'houston_vp2_waste_non_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Houston?",
      secondpar:"You can help Houston keep millions of pounds of recyclables out of landfills with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'houston_vp2_waste_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Houston?",
      secondpar:"You can help Houston keep millions of pounds of recyclables out of landfills with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      'houston_vp3_convenience_non_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Houston?",
      secondpar:"You can help Houston keep millions of pounds of recyclables out of landfills with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'houston_vp3_convenience_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Houston?",
      secondpar:"You can help Houston keep millions of pounds of recyclables out of landfills with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      'houston_vp4_confusion_non_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Houston?",
      secondpar:"You can help Houston keep millions of pounds of recyclables out of landfills with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      'houston_vp4_confusion_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Houston?",
      secondpar:"You can help Houston keep millions of pounds of recyclables out of landfills with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'houston_vp5_bigbulky_non_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Houston?",
      secondpar:"You can help Houston keep millions of pounds of recyclables out of landfills with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      'houston_vp5_bigbulky_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Houston?",
      secondpar:"You can help Houston keep millions of pounds of recyclables out of landfills with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      'houston_vp6_hardrecycle_non_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Houston?",
      secondpar:"You can help Houston keep millions of pounds of recyclables out of landfills with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'houston_vp6_hardrecycle_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Houston?",
      secondpar:"You can help Houston keep millions of pounds of recyclables out of landfills with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      'cleveland_vp1_clutter_non_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Cleveland?",
      secondpar:"You can help Cleveland keep contaminated items from going into landfills with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'cleveland_vp1_clutter_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Cleveland?",
      secondpar:"You can help Cleveland keep contaminated items from going into landfills with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      'cleveland_vp2_waste_non_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Cleveland?",
      secondpar:"You can help Cleveland keep contaminated items from going into landfills with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      'cleveland_vp2_waste_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Cleveland?",
      secondpar:"You can help Cleveland keep contaminated items from going into landfills with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      'cleveland_vp3_convenience_non_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Cleveland?",
      secondpar:"You can help Cleveland keep contaminated items from going into landfills with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      'cleveland_vp3_convenience_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Cleveland?",
      secondpar:"You can help Cleveland keep contaminated items from going into landfills with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      'cleveland_vp4_confusion_non_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Cleveland?",
      secondpar:"You can help Cleveland keep contaminated items from going into landfills with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      'cleveland_vp4_confusion_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Cleveland?",
      secondpar:"You can help Cleveland keep contaminated items from going into landfills with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      'cleveland_vp5_bigbulky_non_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Cleveland?",
      secondpar:"You can help Cleveland keep contaminated items from going into landfills with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      'cleveland_vp5_bigbulky_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Cleveland?",
      secondpar:"You can help Cleveland keep contaminated items from going into landfills with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      'cleveland_vp6_hardrecycle_non_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Cleveland?",
      secondpar:"You can help Cleveland keep contaminated items from going into landfills with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      'cleveland_vp6_hardrecycle_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to Cleveland?",
      secondpar:"You can help Cleveland keep contaminated items from going into landfills with Recyclops. Make your impact today!",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'stlouis_vp1_clutter_non_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to St. Louis? ",
      secondpar:"You can help St. Louis reach its recycling goals with Recyclops. Make your impact today! ",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'stlouis_vp1_clutter_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to St. Louis? ",
      secondpar:"You can help St. Louis reach its recycling goals with Recyclops. Make your impact today! ",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'stlouis_vp2_waste_non_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to St. Louis? ",
      secondpar:"You can help St. Louis reach its recycling goals with Recyclops. Make your impact today! ",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'stlouis_vp2_waste_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to St. Louis? ",
      secondpar:"You can help St. Louis reach its recycling goals with Recyclops. Make your impact today! ",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'stlouis_vp3_convenience_non_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to St. Louis? ",
      secondpar:"You can help St. Louis reach its recycling goals with Recyclops. Make your impact today! ",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'stlouis_vp3_convenience_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to St. Louis? ",
      secondpar:"You can help St. Louis reach its recycling goals with Recyclops. Make your impact today! ",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      
      'stlouis_vp4_confusion_non_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to St. Louis? ",
      secondpar:"You can help St. Louis reach its recycling goals with Recyclops. Make your impact today! ",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'stlouis_vp4_confusion_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to St. Louis? ",
      secondpar:"You can help St. Louis reach its recycling goals with Recyclops. Make your impact today! ",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'stlouis_vp5_bigbulky_non_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to St. Louis? ",
      secondpar:"You can help St. Louis reach its recycling goals with Recyclops. Make your impact today! ",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'stlouis_vp5_bigbulky_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to St. Louis? ",
      secondpar:"You can help St. Louis reach its recycling goals with Recyclops. Make your impact today! ",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'stlouis_vp6_hardrecycle_non_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to St. Louis? ",
      secondpar:"You can help St. Louis reach its recycling goals with Recyclops. Make your impact today! ",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      },
      
      
      'stlouis_vp6_hardrecycle_localized': {
      header: "Recycling on demand, right from your doorstep.",
      firstpar:"Do you worry about how much waste goes into landfills or oceans? Do you want to be part of the solution in protecting the planet? Rethink your recycling with Recyclops, an on-demand service that reduces waste and recycles right.",
      header2:"Why is this important to St. Louis? ",
      secondpar:"You can help St. Louis reach its recycling goals with Recyclops. Make your impact today! ",
      image:'https://cat-pal.com/wp-content/uploads/2021/08/hugging-1-2-1-1.png'
      }
      
      
    
    
  
    
    
    
  };
  // Parse the URL parameter
  const getParameterByName = function (name, url) {
      if (!url) url = window.location.href;
      name = name.replace(/[\[\]]/g, "\\$&");
      const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
          results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, " "));
  };
  // Insert content from keyword list
  const changeContent = function (list, keyword, content) {
      const setup = list[keyword];
      if(setup) {
          Object.keys(setup).forEach(function (key) {
              content[key].innerText = setup[key];
              content[key].setAttribute('src',setup[key]);
          });
      }
  };
  // Give the parameter a variable name
  const dynamicKeyword = getParameterByName('utm_dynamic');
  // Change content on a page
  changeContent(keywordList, dynamicKeyword, dynamicContent);
   });
  
 
 
 
 
 
 
