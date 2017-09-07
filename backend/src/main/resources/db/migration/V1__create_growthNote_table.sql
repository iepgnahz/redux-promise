CREATE TABLE `growthNote` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createTime` TIMESTAMP,
  `date` TIMESTAMP default current_timestamp,
  `title` VARCHAR(225),
  `content` VARCHAR(225),
  `rawId` int(11),
  `author` int(11),
  `operationType` enum('CREATE', 'UPDATE', 'DELETE'),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;