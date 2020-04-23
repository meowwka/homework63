package microgram.hw.Repository;

import microgram.hw.Model.Subscription;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface SubscriptionRepository extends CrudRepository<Subscription,String> {
    List<Subscription> getAllByFollowerId(String followerId);
}