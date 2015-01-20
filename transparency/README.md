#Google and Facebook transparency data

Basic scatterplot visualizing user data requests to Google and Facebook from countries around the world.

Sources: [Facebook](https://govtrequests.facebook.com/), [Google](http://www.google.com/transparencyreport/userdatarequests/data/)

#### Process

1. Wrangle data, figure out what would be the best way to visualize it. I decided to go with a chart and not a map so that users will be able to see all countries clearly.
2. Why scatterplot? Because there is missing data from year to year, and every year has data from different countries, it would be hard to draw a trend using a line chart. Simply plotting the points would be enough to display the data.
3. Deal with the shape of the raw data. I combined both the Facebook and Google data sets into one, so users could compare the two together and more easily see differences.
4. Style the chart to differentiate between the two companies, but also to bring out any trends from countries that have data for multiple years.

#### Outcomes

Basic scatterplot showing the largest amount of requests to both sites coming from the United States. Styles and interaction are used for differentiating between different data sets but also so users can get more detailed numbers for each data point.

#### Additional data?

Would be nice to have data from Facebook going back as early as the data from Google does. Users would then be able to really compare the two kinds of requests and see any trends from an extended period of time.

It might be useful to also have more consistent data for every country on the list. There are countries for which there is data for only one or two years. While these are helpful for comparisons for that year, it is hard to derive any trend comparing it to other countries over time.

#### Challenges

Figuring out the best way to display the data took a good deal of time because of the different scopes of the two different data sets. Merging the data together also took some wrangling around with the data because each data set had different naming conventions and also different types of data.